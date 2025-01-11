import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import { visionMission } from "@/data/data";
import Image from "next/image";
import { FC } from "react";

const VisionMissionSection: FC = () => {
  return (
    <section>
      <Container>
        <Flex direction="col" justify="justify-between" align="start">
          <div className="relative w-full max-w-lg h-96">
            <Image src={"/img/about-us/about-us.png"} alt="group-photo" fill className="object-cover object-center rounded-lg" />
          </div>
          <Flex direction="col" directionMd="col" align="start">
            {visionMission.map((item, i) => (
              <Flex key={i} direction="col" directionMd="col" align="start" className="max-w-lg border shadow-md p-8 text-justify rounded-lg bg-brand-600 text-white">
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p>{item.description}</p>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default VisionMissionSection;
