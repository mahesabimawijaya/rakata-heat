import SemiHeroSection from "@/components/organisms/semi-hero-section";
import TeamsSection from "@/components/organisms/teams-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams | Rakata Heat",
  description: "Meet our skilled team of experts dedicated to providing top-quality heat treatment services. Our professionals ensure precision, safety, and innovation in every project we handle.",
};

export default function Teams() {
  return (
    <>
      <main>
        <SemiHeroSection title="Teams" subtitle="Dedicated Professionals with a Passion for Excellence" imgUrl="/img/teams/teams.jpg" />
        <TeamsSection />
      </main>
    </>
  );
}
