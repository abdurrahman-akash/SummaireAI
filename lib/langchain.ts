import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function fetchAndExtractPdfText(fileUrl: string) {
    try {
        // Fetch the PDF file from the provided URL
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch PDF: ${response.statusText}`);
        }

        const blob = await response.blob();

        // Convert Blob to array buffer
        const arrayBuffer = await blob.arrayBuffer();

        // Use the "buffer" method to load from memory
        const loader = new PDFLoader(new Blob([arrayBuffer]));

        // Load the PDF and extract its content
        const docs = await loader.load();

        // Combine all pages into a single text output
        return docs.map((doc) => doc.pageContent).join('\n');
    } catch (error) {
        console.error("Error extracting text from PDF:", error);
        throw new Error("Failed to extract text from PDF");
    }
}