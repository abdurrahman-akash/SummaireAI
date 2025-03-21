import BgGradient from "@/components/common/bg-gradient";
import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";
import HowItWorksSection from "@/components/home/works-section";
import PriceingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col pb-16">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PriceingSection />
        <CTASection />
      </div>
    </div>
  );
}
