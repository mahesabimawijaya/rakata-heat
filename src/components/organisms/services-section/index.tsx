import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import { services } from "@/data/data";
import Image from "next/image";
import { FC } from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const ServicesSection: FC = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex direction="col" gap="gap-20">
          <Flex direction="col" gap="gap-3">
            <Flex justify="justify-center">
              <SectionTitle>Our Services</SectionTitle>
            </Flex>
            <p className="capitalize font-medium">Solusi Ahli, Dirancang Khusus untuk Anda</p>
          </Flex>
          <Flex gap="gap-16">
            <Flex>
              {services.slice(0, 3).map((service, i) => (
                <Flex key={i} direction="col" gap="gap-0" className="relative w-[300px] h-[250px] border rounded-lg shadow-md cursor-help">
                  <div className="relative w-full h-full">
                    <Image src={`/img/services/${service.imgUrl}.png`} alt={service.title} fill className="relative object-cover object-center rounded-lg" />
                  </div>
                  <Flex className="absolute w-fit font-medium rounded-r-full left-[-2px] bottom-4 py-2 pl-3 pr-5 text-white bg-brand-600">{service.title}</Flex>
                  <div className="absolute overflow-y-auto opacity-0 hover:opacity-100 duration-200 w-full h-full p-3 text-white bg-brand-600 bg-opacity-90 rounded-lg">{service.description}</div>
                </Flex>
              ))}
            </Flex>
            <button className="hover:scale-110 duration-200">
              <Flex gap="gap-2" className="text-brand-700">
                <p className="font-medium text-xl">See More</p>
                <FaChevronCircleRight size={40} />
              </Flex>
            </button>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default ServicesSection;
