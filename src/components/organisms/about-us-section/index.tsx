import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import { Reveal } from "@/components/templates/Reveal";
import Image from "next/image";
import { FC } from "react";

const AboutUsSection: FC = () => {
  return (
    <section className="w-full">
      <Container>
        <Flex direction="col" justify="justify-between" className="py-20">
          <Flex direction="col" directionMd="col" align="start" className="md:w-1/2 pb-10 ">
            <Reveal>
              <SectionTitle>About Us</SectionTitle>
            </Reveal>
            <Reveal>
              <p className="text-justify md:text-left">
                Kami adalah profesional berpengalaman di bidang heat treatment yang kemudian mendirikan perusahaan dengan nama PT RAKATA HEAT. Sejak didirikan, komitmen perusahaan pada pelayanan site
                telah menjadi fitur dominan dalam pengembangan reputasi yang diperoleh dengan baik, untuk standar kualitas dan keahlian teknis tertinggi. Kami hadir untuk memberikan keunggulan layanan
                di Indonesia, untuk industri minyak, petrokimia, pembangkit listrik, kelautan, logam dan metalurgi. PT. RAKATA HEAT siap dan antusias untuk dapat bekerja sama dengan anda untuk
                mendukung kesuksesan anda. Kami siap di darat, laut dan hutan. Dari mulai kota besar hingga pelosok.
              </p>
            </Reveal>
          </Flex>
          <Reveal width="w-full md:w-1/2">
            <Flex justify="justify-center">
              <Image src={"/img/about-us/about-us-1.jpg"} alt="about-us" width={250} height={250} className="rounded-xl" />
            </Flex>
          </Reveal>
        </Flex>
      </Container>
    </section>
  );
};

export default AboutUsSection;
