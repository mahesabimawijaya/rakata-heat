"use client";

import { Button } from "@/components/atoms/button";
import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import { Reveal } from "@/components/templates/Reveal";
import Link from "next/link";
import { FC } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HeroSection: FC = () => {
  return (
    <section className="flex items-center w-full h-screen text-white fade-in">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1500}
        modules={[Autoplay]}
        className="w-full h-screen"
      >
        <SwiperSlide>
          <div className="flex items-center w-full h-screen pt-20 bg-[url(/img/hero/hero-1.jpeg)] bg-cover bg-center text-white">
            <Container className="w-full">
              <Flex direction="col" directionMd="col" align="start">
                <Reveal>
                  <h1 className="text-3xl lg:text-5xl font-bold md:w-1/2 leading-tight">King of RDO Indonesia</h1>
                </Reveal>
                <Reveal>
                  <h3 className="md:text-lg md:w-1/2">Delivering the Best Refractory Dry Out Solutions in Indonesia. Precision, Efficiency, and Excellence You Can Rely On!</h3>
                </Reveal>
                <Reveal>
                  <Button className="w-fit mt-6">
                    <Link href={"/about-us"}>Hubungi kami</Link>
                  </Button>
                </Reveal>
              </Flex>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center w-full h-screen pt-20 bg-[url(/img/hero/hero-2.jpeg)] bg-cover bg-center text-white">
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
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
