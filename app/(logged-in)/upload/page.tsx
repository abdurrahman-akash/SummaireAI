import BgGradient from "@/components/common/bg-gradient";
import UploadHeader from "@/components/upload/upload-header";


export default function Page() {
  return (
    <section className="relative flex flex-col items-center min-h-screen text-center px-6">
      <div className="absolute inset-0 -z-10">
        <BgGradient />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 space-y-6">
        <UploadHeader />
      </div>
    </section>
  );
}
