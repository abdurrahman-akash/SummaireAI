"use client"
import BgGradient from "@/components/common/bg-gradient";
import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";


export default function Page() {
  return (
    <section className="relative flex flex-col items-center min-h-screen text-center px-6">
      <div className="absolute inset-0 -z-10">
        <BgGradient />
      </div>

      <div
        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 space-y-6"
        style={{
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <UploadHeader />
        <UploadForm />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
