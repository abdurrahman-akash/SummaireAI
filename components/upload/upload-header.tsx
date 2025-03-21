import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function UploadHeader() {
    return (
        <div className="space-y-4">
            <div className="flex justify-center">
          <Badge className="flex items-center gap-2 px-4 py-2 border border-emerald-500 text-emerald-600 bg-transparent rounded-full shadow-md">
            <Sparkles className="h-5 w-5 text-emerald-600 animate-pulse" />
            <span className="text-sm font-semibold">AI-Powered Content Creation</span>
          </Badge>
        </div>

        <div className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start Uploading {' '}
            <span className="relative inline-block">
                <span className="relative z-10 px-2">Your PDF's</span>
                <span className="absolute inset-0 bg-emerald-200/50 -rotate-2 rounded-lg transform -skew-y-1"
                    aria-hidden="true"></span>
            </span>{' '}
        </div>

        <div className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
            <p>
                Upload your PDF and let our AI do the magic! ✨
            </p>
        </div>
        </div>
    )
}