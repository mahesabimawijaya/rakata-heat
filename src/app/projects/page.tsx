import ProjectsSection from "@/components/organisms/projects";
import SemiHeroSection from "@/components/organisms/semi-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rakata Heat",
  description: "Discover our completed heat treatment projects, showcasing our expertise in annealing, quenching, and tempering. See how we deliver durable solutions for industrial applications.",
};

export default function Projects() {
  return (
    <>
      <main>
        <SemiHeroSection title="Projects" subtitle="Proven Results Through Dedicated Effort" imgUrl="/img/projects/projects.jpg" />
        <ProjectsSection />
      </main>
    </>
  );
}
