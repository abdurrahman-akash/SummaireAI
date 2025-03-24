import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function fetchAndExtractPdfText(fileUrl: string) {
    const response = await fetch(fileUrl);
    const blob = await response.blob();

    // Convert Blob to Uint8Array
    const arrayBuffer = await blob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Use the "buffer" method to load from memory
    const loader = new PDFLoader(uint8Array, { splitPages: false });

    const docs = await loader.load();

    // Combine all pages into a single text output
    return docs.map((doc) => doc.pageContent).join('\n');
}
