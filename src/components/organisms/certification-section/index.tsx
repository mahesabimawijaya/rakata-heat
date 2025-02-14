"use client";

import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { certificateImages } from "@/data/data";
import { Reveal } from "@/components/templates/Reveal";

const CertificationSection = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex direction="col" directionMd="col" align="start">
          <Flex direction="col" directionMd="col" align="start" gap="gap-3">
            <Reveal>
              <SectionTitle>Certifications</SectionTitle>
            </Reveal>
            <Reveal>
              <p className="capitalize font-medium">Keahlian Terbukti, Dipercaya oleh Pemimpin Industri</p>
            </Reveal>
          </Flex>
          <Reveal>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation
              pagination={{ type: "bullets" }}
              modules={[Navigation, Pagination, Autoplay]}
              className="w-full max-w-md md:max-w-[800px]"
            >
              {certificateImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className={`${i === certificateImages.length - 1 ? "w-full" : "w-[350px] md:w-[450px]"} mx-auto relative w-full h-[500px]`}>
                    <Image src={img} alt={img} fill />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>
        </Flex>
      </Container>
    </section>
  );
};

export default CertificationSection;
