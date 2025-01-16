import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import { Reveal } from "@/components/templates/Reveal";
import { equipments } from "@/data/data";
import Image from "next/image";
import { FC } from "react";

const EquipmentsSection: FC = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex direction="col" directionMd="col" align="start" gap="gap-3" className="mb-10">
          <Reveal>
            <SectionTitle>Equipments</SectionTitle>
          </Reveal>
          <Reveal>
            <p className="capitalize font-medium">Peralatan terbaik untuk segala kebutuhan kami</p>
          </Reveal>
        </Flex>
        <Flex gap="gap-7" justify="justify-center flex-wrap">
          {equipments.map((equipment, i) => (
            <div key={i} className="flex flex-col bg-brand-700 items-center rounded-lg shadow w-72 md:h-72 lg:h-auto lg:flex-row lg:w-[512px]">
              <div className="relative rounded-t-lg w-full h-40 lg:w-40 md:rounded-none lg:rounded-s-lg flex-shrink-0">
                <Image className="object-cover rounded-t-lg md:rounded-t-lg lg:rounded-none lg:rounded-s-lg" src={equipment.imgUrl} fill alt="" />
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{equipment.description}</h5>
              </div>
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default EquipmentsSection;
