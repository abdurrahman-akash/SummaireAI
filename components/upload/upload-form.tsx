"use client";
import UploadFormInput from '@/components/upload/upload-form-input'
import { z } from 'zod'
import { useUploadThing } from "@/utils/uploadthing"
import { toast } from "sonner";

const schema = z.object({
    file: z
            .instanceof(File, {message: 'Invalid file'})
            .refine((file) => file.size <= 20 * 1024 * 1024, 
                'File size must be less than 20MB'
            )
            .refine((file) => file.type === 'application/pdf', 
               'Invalid file type. Only PDF files are allowed',
            ),
});


export default function UploadForm() {
    const { startUpload, routeConfig } = useUploadThing('pdfUploader',
        {
            onClientUploadComplete: () => {
                console.log('Upload Successfully!');
            },
            onUploadError: (err) => {
                console.error('Upload Failed', err);
                toast('Error Occurred while uploading',{
                    description: err.message,
                })
            },
            onUploadBegin: ([file]) => {
                console.log('upload has begun for', file);
            },
        }
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted');
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;

        // Validating the fields
        const validatedFields = schema.safeParse({file});

        console.log(validatedFields);

        if (!validatedFields.success) {
            toast('❌ Something went wrong', {
                description:
                    validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file',
                style: { color: 'red' },
            });

            return;
        }

        toast('🏷️ Uploading PDF...', {
            description: 'We are uploading your pdf to our servers',
        })

        // upload the file to uploadthing

        const resp = await startUpload([file]);
        if (!resp) {
            toast('❌ Something went wrong', {
                description: 'Please use a different file',
                style: { color: 'red' },
            });
            return;
        }

        toast('🏷️ Processing your pdf', {
            style: { fontStyle: 'italic' },
            description: 'Hang tight! Our AI is reading through your document! ',
        })
        // parse the pdf using lang chain
        // Summarize the pdf using AI
        // Save the Summary to the database
        // redirect to the {id} summary page
    };
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    )
}
