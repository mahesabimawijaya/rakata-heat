import AboutUsSection from "@/components/organisms/about-us-section";
import SemiHeroSection from "@/components/organisms/semi-hero-section";
import VisionMissionSection from "@/components/organisms/vision-mission-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Rakata Heat",
  description:
    "We are experienced professionals in the field of heat treatment who later established a company named PT RAKATA HEAT. Since its inception, the company's commitment to on-site services has been a key feature in developing its well-earned reputation for the highest standards of quality and technical expertise. We are here to provide excellent services in Indonesia for the oil, petrochemical, power generation, marine, metal, and metallurgy industries. PT RAKATA HEAT is ready and enthusiastic to collaborate with you to support your success. We are prepared to operate on land, at sea, and in remote areas—from major cities to the most secluded regions.",
};

export default function AboutUs() {
  return (
    <>
      <main>
        <SemiHeroSection title="About Us" subtitle="Driven by Purpose, Guided by Passion" imgUrl="/img/about-us/about-us.jpg" />
        <AboutUsSection />
        <VisionMissionSection />
      </main>
    </>
  );
}
