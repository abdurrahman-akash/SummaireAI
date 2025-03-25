import { currentUser } from '@clerk/nextjs/server';
import { UploadThingError } from 'uploadthing/server';
import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader: f({pdf: {maxFileSize: '32MB'}})
    .middleware(async ({ req }) => {
        //get user info from req
        const user = await currentUser();

        if (!user) throw new UploadThingError('Unauthorized');

        return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file}) =>{
        console.log('upload completed for user id', metadata.userId);
        console.log('file url', file.url);
        // Ensure the return value is void or a JsonObject
        return { 
            userId: metadata.userId, 
            file: {
                ufsUrl: file.ufsUrl, // ✅ Use `ufsUrl`
                name: file.name,
            } 
        };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;