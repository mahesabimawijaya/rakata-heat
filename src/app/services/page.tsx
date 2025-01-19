import SemiHeroSection from "@/components/organisms/semi-hero-section";
import ServicesSection from "@/components/organisms/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Rakata Heat",
  description: "Explore our professional heat treatment services, including annealing, quenching, tempering, and more. We deliver precision and durability for industrial and manufacturing needs",
};

export default function Services() {
  return (
    <>
      <main>
        <SemiHeroSection title="Services" subtitle="Best Solutions for heat treatment." imgUrl="/img/services/services.jpeg" />
        <ServicesSection />
      </main>
    </>
  );
}
