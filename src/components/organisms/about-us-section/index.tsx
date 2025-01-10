import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import Image from "next/image";
import { FC } from "react";

const AboutUsSection: FC = () => {
  return (
    <section className="w-full">
      <Container>
        <Flex justify="justify-between" className="py-20">
          <Flex direction="col" align="start" className="w-1/2 pb-10">
            <SectionTitle>About Us</SectionTitle>
            <p>
              Kami adalah profesional berpengalaman di bidang heat treatment yang kemudian mendirikan perusahaan dengan nama PT RAKATA HEAT. Sejak didirikan, komitmen perusahaan pada pelayanan site
              telah menjadi fitur dominan dalam pengembangan reputasi yang diperoleh dengan baik, untuk standar kualitas dan keahlian teknis tertinggi. Kami hadir untuk memberikan keunggulan layanan
              di Indonesia, untuk industri minyak, petrokimia, pembangkit listrik, kelautan, logam dan metalurgi.
            </p>
          </Flex>
          <Flex justify="justify-center" className="w-1/2 pt-16 relative max-w-screen-sm">
            <Image src={"/img/about-us/about-us-1.png"} alt="about-us" width={200} height={200} className="rounded-xl relative" />
            <Image src={"/img/about-us/about-us-2.png"} alt="about-us" width={200} height={200} className="rounded-xl absolute top-[-10px] right-24" />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default AboutUsSection;
