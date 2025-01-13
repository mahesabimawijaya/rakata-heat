import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import { Reveal } from "@/components/templates/Reveal";
import Image from "next/image";
import { FC } from "react";

const TeamsSection: FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-neutral-100">
      <Container>
        <Flex direction="col" directionMd="col" gap="gap-10" className="py-20">
          <Flex direction="col" directionMd="col" gap="gap-3">
            <Reveal>
              <Flex justify="justify-center">
                <SectionTitle>Our Teams</SectionTitle>
              </Flex>
            </Reveal>
            <Reveal>
              <p className="capitalize font-medium">Dimana bakat bertemu dengan kerja sama</p>
            </Reveal>
          </Flex>
          <Reveal width="w-full">
            <Flex justify="justify-center" gap="gap-10" className="w-full">
              {/* card start */}
              <Flex direction="col" directionMd="col" className="w-full max-w-40">
                <p className="font-medium">President Director</p>
                <Flex direction="col" directionMd="col" gap="gap-0" className="w-full bg-brand-600 text-white rounded-lg">
                  <div className="relative w-full h-40">
                    <Image src={"/img/teams/placeholder.png"} alt="presdir" fill className="object-cover object-center rounded-t-lg" />
                  </div>
                  <div className="flex justify-center p-2">
                    <p>Herlena</p>
                  </div>
                </Flex>
              </Flex>
              {/* card end */}
              {/* card start */}
              <Flex direction="col" directionMd="col" className="w-full max-w-40">
                <p className="font-medium">Commissioner</p>
                <Flex direction="col" directionMd="col" gap="gap-0" className="w-full bg-brand-600 text-white rounded-lg">
                  <div className="relative w-full h-40">
                    <Image src={"/img/teams/placeholder.png"} alt="presdir" fill className="object-cover object-center rounded-t-lg" />
                  </div>
                  <div className="flex justify-center p-2">
                    <p>Darliana S.P</p>
                  </div>
                </Flex>
              </Flex>
              {/* card end */}
            </Flex>
          </Reveal>
          <Reveal width="w-full">
            <Flex justify="justify-center" gap="gap-10" className="w-full">
              {/* card start */}
              <Flex direction="col" directionMd="col" className="w-full max-w-40">
                <p className="font-medium">Director</p>
                <Flex direction="col" directionMd="col" gap="gap-0" className="w-full bg-brand-600 text-white rounded-lg">
                  <div className="relative w-full h-40">
                    <Image src={"/img/teams/placeholder.png"} alt="presdir" fill className="object-cover object-center rounded-t-lg" />
                  </div>
                  <div className="flex justify-center p-2">
                    <p>Monalisa</p>
                  </div>
                </Flex>
              </Flex>
              {/* card end */}
              {/* card start */}
              <Flex direction="col" directionMd="col" className="w-full max-w-40">
                <p className="font-medium">Company Develop</p>
                <Flex direction="col" directionMd="col" gap="gap-0" className="w-full bg-brand-600 text-white rounded-lg">
                  <div className="relative w-full h-40">
                    <Image src={"/img/teams/placeholder.png"} alt="presdir" fill className="object-cover object-center rounded-t-lg" />
                  </div>
                  <div className="flex justify-center p-2">
                    <p>Daan Elia M.</p>
                  </div>
                </Flex>
              </Flex>
              {/* card end */}
            </Flex>
          </Reveal>
          <Reveal>
            <Flex justify="justify-center" align="items-end" gap="gap-7 md:gap-10" className="w-full flex-wrap">
              {/* card start */}
              <Flex direction="col" directionMd="col" className="w-full max-w-40">
                <p className="font-medium">Finance</p>
                <Flex direction="col" directionMd="col" gap="gap-0" className="w-full bg-brand-600 text-white rounded-lg">
                  <div className="relative w-full h-40">
                    <Image src={"/img/teams/placeholder.png"} alt="presdir" fill className="object-cover object-center rounded-t-lg" />
                  </div>
                  <div className="flex justify-center p-2">
                    <p>Liana</p>
                  </div>
                </Flex>
              </Flex>
              {/* card end */}
              {/* card start */}
              <Flex direction="col" directionMd="col" className="w-full max-w-40">
                <p className="font-medium text-center">Heat Treatment Manager</p>
                <Flex direction="col" directionMd="col" gap="gap-0" className="w-full bg-brand-600 text-white rounded-lg">
                  <div className="relative w-full h-40">
                    <Image src={"/img/teams/placeholder.png"} alt="presdir" fill className="object-cover object-center rounded-t-lg" />
                  </div>
                  <div className="flex justify-center p-2">
                    <p>Paulus</p>
                  </div>
                </Flex>
              </Flex>
              {/* card end */}
              {/* card start */}
              <Flex direction="col" directionMd="col" className="w-full max-w-40">
                <p className="font-medium text-center">Insulation & Scaffolding</p>
                <Flex direction="col" directionMd="col" gap="gap-0" className="w-full bg-brand-600 text-white rounded-lg">
                  <div className="relative w-full h-40">
                    <Image src={"/img/teams/placeholder.png"} alt="presdir" fill className="object-cover object-center rounded-t-lg" />
                  </div>
                  <div className="flex justify-center p-2">
                    <p>Dian Iswahyudi</p>
                  </div>
                </Flex>
              </Flex>
              {/* card end */}
            </Flex>
          </Reveal>
        </Flex>
      </Container>
    </section>
  );
};

export default TeamsSection;
