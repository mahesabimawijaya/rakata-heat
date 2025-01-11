import CertificationSection from "@/components/organisms/certification-section";
import ProjectsSection from "@/components/organisms/projects";
import SemiHeroSection from "@/components/organisms/semi-hero-section";

export default function Projects() {
  return (
    <>
      <SemiHeroSection title="Projects & Certification" subtitle="Proven Results Through Dedicated Effort" imgUrl="/img/projects/projects.jpg" />
      <ProjectsSection />
      <CertificationSection />
    </>
  );
}
