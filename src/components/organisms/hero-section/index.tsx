import { Button } from "@/components/atoms/button";
import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section className="flex items-center w-full h-screen pt-20 bg-[url(/img/hero/hero.jpg)] bg-cover bg-center text-white">
      <Container className="w-full">
        <Flex direction="col" align="start">
          <h1 className="text-5xl font-bold w-1/2 leading-tight">Leaders in Industrial Heat Treatment and Engineering Solutions</h1>
          <h3 className="text-lg w-1/2">Advanced Heat Treatment Services Designed to Improve the Reliability, Efficiency, and Longevity of Your Materials in Demanding Environments</h3>
          <Button className="w-fit mt-6">Hubungi kami</Button>
        </Flex>
      </Container>
    </section>
  );
};

export default HeroSection;
