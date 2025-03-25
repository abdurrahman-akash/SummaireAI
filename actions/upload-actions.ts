'use server'

import { fetchAndExtractPdfText } from '@/lib/langchain';
import { generateSummaryFromOpenAI } from '@/lib/openai';

export async function generatePdfSummary(uploadResponse:{
    ServerData: {
        userId: string;
        file: {
            url: string;
            name: string;
        };
    };
}) {
    if (!uploadResponse) {
        return {
            success: false,
            message: 'File Upload Failed',
            data: null,
        };
    }

    const {
        ServerData: {
            userId,
            file: { url: pdfUrl, name: fileName },
        },
    } = uploadResponse; // Access the first element of the array

    if (!pdfUrl) {
        return {
            success: false,
            message: 'File Upload Failed',
            data: null,
        };
    }

    try {
        const pdfText = await fetchAndExtractPdfText(pdfUrl);
        console.log({ pdfText });

        let summary
        try {
            summary = await generateSummaryFromOpenAI(pdfText);
            console.log({ summary });
        } catch (error) {
            console.error;
        }

        if (!summary) {
            return {
                success: false,
                message: 'Failed to generate summary',
                data: null,
            };
        }
    } catch (err) {
        return {
            success: false,
            message: 'Failed to extract text from PDF',
            data: null,
        };
    }
}