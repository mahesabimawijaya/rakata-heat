import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import { Reveal } from "@/components/templates/Reveal";
import Image from "next/image";
import { FC } from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection: FC = () => {
  const totalImages = 9;
  return (
    <section className="py-20 ">
      <Container className="w-full relative overflow-hidden">
        <Flex direction="col" directionMd="col" gap="gap-7">
          <Flex direction="col" directionMd="col" gap="gap-3" className="">
            <Reveal>
              <Flex justify="justify-center">
                <SectionTitle>Our Clients</SectionTitle>
              </Flex>
            </Reveal>
            <Reveal>
              <p className="capitalize font-medium text-center">Dipercaya oleh para professional di industri nasional</p>
            </Reveal>
          </Flex>

          <Marquee gradient={true} className="overflow-hidden">
            {Array.from({ length: totalImages }).map((_, i) => (
              <Reveal key={i}>
                <div className="mr-4 w-32 h-auto flex-shrink-0 overflow-hidden">
                  <Image src={`/img/client/client-${i + 1}.png`} alt="Running Image" width={160} height={120} />
                </div>
              </Reveal>
            ))}
          </Marquee>
        </Flex>
      </Container>
    </section>
  );
};

export default MarqueeSection;
