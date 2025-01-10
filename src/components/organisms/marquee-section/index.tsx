import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import Image from "next/image";
import { FC } from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection: FC = () => {
  const totalImages = 9;
  return (
    <section className="py-20">
      <Container className="w-full relative overflow-hidden">
        <Flex direction="col" gap="gap-7">
          <Flex direction="col" gap="gap-3">
            <Flex justify="justify-center">
              <SectionTitle>Our Clients</SectionTitle>
            </Flex>
            <p className="capitalize font-medium">Dipercaya oleh para professional di industri nasional</p>
          </Flex>
          <Marquee gradient={true}>
            {Array.from({ length: totalImages }).map((_, i) => (
              <div key={i} className="mr-4 w-32 h-auto flex-shrink-0">
                <Image src={`/img/client/client-${i + 1}.png`} alt="Running Image" width={160} height={120} />
              </div>
            ))}
          </Marquee>
        </Flex>
      </Container>
    </section>
  );
};

export default MarqueeSection;
