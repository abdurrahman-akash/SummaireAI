import { SignUp } from "@clerk/nextjs";
import BgGradient from "@/components/common/bg-gradient";

export default function Page() {
  return (
    <div className="relative flex justify-center items-center h-screen">
          <div className="absolute inset-0 -z-10">
            <BgGradient className="from-emerald-400 via-emerald-300 to-sky-200"/>
          </div>
          <div className="flex flex-col items-center justify-center z-10">
              <SignUp />
            </div>
        </div>
  );
}