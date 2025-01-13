import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import { Reveal } from "@/components/templates/Reveal";
import { visionMission } from "@/data/data";
import Image from "next/image";
import { FC } from "react";

const VisionMissionSection: FC = () => {
  return (
    <section>
      <Container>
        <Flex direction="col" justify="justify-between" align="start">
          <Reveal width="w-[100%] lg:w-[50%]">
            <div className="relative w-full max-w-lg h-96">
              <Image src={"/img/about-us/about-us.jpeg"} alt="group-photo" fill className="object-cover object-center rounded-lg" />
            </div>
          </Reveal>
          <Flex direction="col" directionMd="col" align="start">
            {visionMission.map((item, i) => (
              <Reveal key={i}>
                <Flex direction="col" directionMd="col" align="start" className="max-w-lg border shadow-md p-8 text-justify rounded-lg bg-brand-600 text-white">
                  <h3 className="text-2xl font-medium">{item.title}</h3>
                  <p>{item.description}</p>
                </Flex>
              </Reveal>
            ))}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default VisionMissionSection;
