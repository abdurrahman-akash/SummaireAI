"use client";
import UploadFormInput from '@/components/upload/upload-form-input';
import { z } from 'zod';
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary } from "@/actions/upload-actions";

const schema = z.object({
    file: z
        .instanceof(File, { message: 'Please upload a valid file.' })
        .refine((file) => file.size <= 20 * 1024 * 1024, 'File size must be less than 20MB.')
        .refine((file) => file.type === 'application/pdf', 'Only PDF files are allowed.'),
});

export default function UploadForm() {
    const { startUpload } = useUploadThing('pdfUploader', {
        onClientUploadComplete: () => {
            console.log('Upload Successfully!');
        },
        onUploadError: (err) => {
            console.error('Upload Failed', err);
            toast('❌ Error Occurred while uploading', {
                description: err.message,
            });
        },
        onUploadBegin: ([file]) => {
            console.log('Upload has begun for', file);
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted');
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;

        // Validate fields
        const validatedFields = schema.safeParse({ file });

        if (!validatedFields.success) {
            toast('❌ Validation Failed', {
                description:
                    validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file.',
                style: { color: 'red' },
            });
            return;
        }

        toast('🏷️ Uploading PDF...', {
            description: 'We are uploading your PDF to our servers.',
        });

        // Upload the file
        let resp;
        try {
            resp = await startUpload([file]);
            if (!resp) {
                throw new Error('Upload failed. Please try again.');
            }
        } catch (error) {
            toast('❌ Upload Failed', {
                description: error instanceof Error ? error.message : 'An unexpected error occurred.',
                style: { color: 'red' },
            });
            return;
        }

        toast('🏷️ Processing your PDF...', {
            style: { fontStyle: 'italic' },
            description: 'Hang tight! Our AI is reading through your document!',
        });

        // Transform response for generatePdfSummary
        const transformedResp = {
            ServerData: {
                userId: 'user-id-placeholder', // Replace with actual user ID
                file: {
                    url: resp[0]?.ufsUrl, // ✅ Use `ufsUrl`
                    name: resp[0]?.name,
                },
            },
        };

        // Parse the PDF using LangChain
        const summary = await generatePdfSummary(transformedResp);
        console.log({ summary });

        if (!summary.success) {
            toast('❌ PDF Processing Failed', {
                description: summary.message,
                style: { color: 'red' },
            });
        } else {
            toast('✅ PDF Processed Successfully', {
                description: 'Your document has been summarized! Check the console for details.',
                style: { color: 'green' },
            });
        }
    };

    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    );
}