import AboutUsSection from "@/components/organisms/about-us-section";
import HeroSection from "@/components/organisms/hero-section";
import MarqueeSection from "@/components/organisms/marquee-section";
import ServicesSection from "@/components/organisms/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  keywords: "rakata, rakata heat, heat treatment, rdo, refractory dry out",
};

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection limit={3} />
        <MarqueeSection />
      </main>
    </>
  );
}
