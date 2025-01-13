import { Button } from "@/components/atoms/button";
import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import { Reveal } from "@/components/templates/Reveal";
import Link from "next/link";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section className="flex items-center w-full h-screen pt-20 bg-[url(/img/hero/hero-pltu-2.jpeg)] bg-cover bg-center text-white fade-in">
      <Container className="w-full">
        <Flex direction="col" directionMd="col" align="start">
          <Reveal>
            <h1 className="text-3xl lg:text-5xl font-bold md:w-1/2 leading-tight">Leaders in Industrial Heat Treatment and Engineering Solutions</h1>
          </Reveal>
          <Reveal>
            <h3 className="md:text-lg md:w-1/2">Advanced Heat Treatment Services Designed to Improve the Reliability, Efficiency, and Longevity of Your Materials in Demanding Environments</h3>
          </Reveal>
          <Reveal>
            <Button className="w-fit mt-6">
              <Link href={"/about-us"}>Hubungi kami</Link>
            </Button>
          </Reveal>
        </Flex>
      </Container>
    </section>
  );
};

export default HeroSection;
