import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex mx-auto flex-col z-0 items-center py-16
    sm:py-20 lg-pb-28 transition-all lg:px-12 max-w-7xl w-full">
      <div className="text-center max-w-2xl">
        <div className="flex justify-center">
          <div className="relative p-[1px] rounded-full bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-700 animate-gradient-x group">
            <Badge
              variant={"outline"}
              className="relative flex items-center gap-2 px-6 py-2 text-sm font-medium bg-white rounded-full shadow-md transition-colors duration-300 group-hover:bg-gray-100"
            >
              <Sparkles className="w-10 h-10 text-emerald-500 animate-pulse" />
              <span className="text-emerald-600">Powered by AI</span>
            </Badge>
          </div>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight tracking-tight">
          Transform Documents into {''}
          <span className="relative inline-block">
          <span className="relative z-10 px-2">Concise</span>
          <span 
          className="absolute inset-0 bg-emerald-200/50 -rotate-2
          rounded-lg transform -skew-x-1"
          aria-hidden="true"
          ></span>
          </span> {''}
          Summaries
        </h1>
        <h2 className="mt-4 text-sm text-gray-600 md:text-base leading-relaxed tracking-wide">
          Get a beautiful summary reel of any document in seconds.
        </h2>

        <div className="mt-6">
          <Link href="/#pricing">
            <Button
              variant={'link'} 
              className="text-white text-base sm-text-lg lg:text-xl
              rounded-full px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4
              bg-gradient-to-r from-slate-900 to-emerald-500 hover:from-emerald-500 hover:to-slate-900
              hover:no-underline transition-all duration-300">
              <span>Try SummaireAI</span>
              <ArrowRight className="animate-pulse" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
