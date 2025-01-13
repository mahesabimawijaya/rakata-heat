import AboutUsSection from "@/components/organisms/about-us-section";
import SemiHeroSection from "@/components/organisms/semi-hero-section";
import VisionMissionSection from "@/components/organisms/vision-mission-section";

export default function AboutUs() {
  return (
    <>
      <SemiHeroSection title="About Us" subtitle="Driven by Purpose, Guided by Passion" imgUrl="/img/about-us/about-us.jpeg" />
      <AboutUsSection />
      <VisionMissionSection />
    </>
  );
}
