import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import { projects } from "@/data/data";
import Image from "next/image";
import { FC } from "react";

const ProjectsSection: FC = () => {
  return (
    <section>
      <Container>
        <Flex direction="col" directionMd="col" align="start" gap="gap-10" className="py-20">
          <Flex direction="col" directionMd="col" align="start" gap="gap-3">
            <SectionTitle>Our Projects</SectionTitle>
            <p className="capitalize font-medium">Mewujudkan Solusi yang Memberi Perubahan</p>
          </Flex>
          <Flex justify="justify-center" gap="gap-10" className="w-full flex-wrap">
            {projects.map((project, i) => (
              <Flex key={i} direction="col" gap="gap-3 md:gap-10" align="items-center md:items-start" className="bg-neutral-100 border shadow-lg rounded-lg p-3 md:p-5">
                <p className="text-center text-xl font-medium">{project.year}</p>
                <Flex align="items-center md:items-start" direction="col" directionMd="col">
                  <div className="relative w-52 h-32 md:w-80 md:h-52">
                    <Image src={"/img/projects/projects-placeholder.jpg"} alt="projects" fill className="object-cover object-center rounded-lg" />
                  </div>
                  <Flex direction="col" directionMd="col" align="start" className="max-w-80">
                    <Flex align="start" gap="gap-1">
                      <p className="w-24 flex-shrink-0 text-sm font-medium text-neutral-800">Client</p>:<p className="text-sm">{project.client}</p>
                    </Flex>
                    <Flex align="start" gap="gap-1">
                      <p className="w-24 flex-shrink-0 text-sm font-medium text-neutral-800">Description</p>:<p className="text-sm">{project.description}</p>
                    </Flex>
                    <Flex align="start" gap="gap-1">
                      <p className="w-24 flex-shrink-0 text-sm font-medium text-neutral-800">Location</p>:<p className="text-sm">{project.location}</p>
                    </Flex>
                  </Flex>
                  <p></p>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default ProjectsSection;
