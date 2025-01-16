import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import { Reveal } from "@/components/templates/Reveal";
import Image from "next/image";
import { FC } from "react";

interface SemiHeroSectionProps {
  title: string;
  subtitle: string;
  imgUrl: string;
  bgPosition?: string;
}

const SemiHeroSection: FC<SemiHeroSectionProps> = ({ title, subtitle, imgUrl, bgPosition = "object-center" }) => {
  return (
    <section className={`relative w-full h-[50vh]`}>
      <Image src={imgUrl} alt={title} fill priority className={`relative object-cover ${bgPosition} brightness-90`} />
      <Flex className="absolute text-white bg-gradient-to-r from-brand-600 to-transparent w-full h-full top-0 left-0">
        <Container className="w-full">
          <Flex direction="col" directionMd="col" align="start">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            </Reveal>
            <Reveal>
              <h5 className="italic capitalize">{subtitle}</h5>
            </Reveal>
          </Flex>
        </Container>
      </Flex>
    </section>
  );
};

export default SemiHeroSection;
