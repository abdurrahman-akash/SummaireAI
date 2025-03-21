import BgGradient from "@/components/common/bg-gradient";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="absolute inset-0 -z-10">
        <BgGradient className="from-emerald-200 via-emerald-100 to-sky-100" />
      </div>
      <div className="flex flex-col items-center justify-center z-10">
        <SignIn />
      </div>
    </div>
  );
}
