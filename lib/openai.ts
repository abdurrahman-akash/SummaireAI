import { th } from "framer-motion/client";
import OpenAI from "openai";
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSummaryFromOpenAI(pdfText: string) {
    try {
        const response = await client.responses.create({
            model: "gpt-4o",
            input: [
                {
                    role: "system",
                    content: "You are a helpful assistant.",
                },
                {
                    role: "user",
                    content: pdfText,
                },
            ],
            temperature: 0.6,
        });

        return response.output_text;
    } catch (error: any) {
        if (error?.status === 429) {
            throw new Error("OpenAI API rate limit exceeded. Please try again later.");
        }
        throw error;
    }
}
