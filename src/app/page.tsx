import AboutUsSection from "@/components/organisms/about-us-section";
import HeroSection from "@/components/organisms/hero-section";
import MarqueeSection from "@/components/organisms/marquee-section";
import ServicesSection from "@/components/organisms/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <MarqueeSection />
    </>
  );
}
