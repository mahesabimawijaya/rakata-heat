import CertificationSection from "@/components/organisms/certification-section";
import LicenseSection from "@/components/organisms/licenses-section";
import SemiHeroSection from "@/components/organisms/semi-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Rakata Heat",
  description:
    "Discover our certifications and accreditations that demonstrate our commitment to quality, safety, and industry standards. Learn how we ensure excellence in every step of our process.",
};

export default function Certifications() {
  return (
    <>
      <main>
        <SemiHeroSection title="Certifications" subtitle="Empowering Trust Through Accreditation" imgUrl="/img/certifications/certificate-4.jpg" />
        <CertificationSection />
        <LicenseSection />
      </main>
    </>
  );
}
