import type { Metadata } from "next"
import { Source_Sans_3 as FontSans } from "next/font/google"
import "./globals.css"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "@/components/ui/sonner"

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "SummaireAI -- AI-Powered PDF Summarization",
  description: "Save our time by summarizing PDFs with AI. Transform langthy PDFs into concise summaries in seconds with our advance AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up">
      <html lang="en">
        <body className={`font-sans ${fontSans.variable} antialiased`}>
          <div className="relative flex flex-col min-h-screen">
            <Header/>
            <main>{children}</main>
            <Footer/>
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
