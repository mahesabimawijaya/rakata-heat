import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import { Reveal } from "@/components/templates/Reveal";
import Link from "next/link";
import { FC } from "react";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";

const ContactUsSection: FC = () => {
  return (
    <section className="w-full bg-neutral-100">
      <Container>
        <Flex direction="col" justify="justify-center" gap="gap-10" className="flex-wrap py-32">
          <Link href={"https://wa.me/+62217654512"} target="_blank" className="bg-white p-6 border shadow-lg rounded-lg w-full max-w-sm hover:scale-110 duration-200">
            <Reveal>
              <Flex justify="justify-between">
                <Flex direction="col" directionMd="col" gap="gap-1" align="start">
                  <p className="text-neutral-700 font-medium">Give us a call</p>
                  <p className="font-medium text-xl">+62217654512</p>
                </Flex>
                <div className="rounded-full bg-neutral-50 text-brand-600 p-3">
                  <FaPhone size={35} />
                </div>
              </Flex>
            </Reveal>
          </Link>
          <Link href={"https://wa.me/+6282111209072"} target="_blank" className="bg-white p-6 border shadow-lg rounded-lg w-full max-w-sm hover:scale-110 duration-200">
            <Reveal>
              <Flex justify="justify-between">
                <Flex direction="col" directionMd="col" gap="gap-1" align="start">
                  <p className="text-neutral-700 font-medium">Give us a call</p>
                  <p className="font-medium text-xl">+6282111209072</p>
                </Flex>
                <div className="rounded-full bg-neutral-50 text-brand-600 p-3">
                  <FaPhone size={35} />
                </div>
              </Flex>
            </Reveal>
          </Link>
          <Link href={"https://wa.me/+628119561251"} target="_blank" className="bg-white p-6 border shadow-lg rounded-lg w-full max-w-sm hover:scale-110 duration-200">
            <Reveal>
              <Flex justify="justify-between">
                <Flex direction="col" directionMd="col" gap="gap-1" align="start">
                  <p className="text-neutral-700 font-medium">Give us a call</p>
                  <p className="font-medium text-xl">+628119561251</p>
                </Flex>
                <div className="rounded-full bg-neutral-50 text-brand-600 p-3">
                  <FaPhone size={35} />
                </div>
              </Flex>
            </Reveal>
          </Link>
          <Link href={"https://wa.me/+62217654512"} target="_blank" className="bg-white p-6 border shadow-lg rounded-lg w-full max-w-sm hover:scale-110 duration-200">
            <Reveal>
              <Flex justify="justify-between">
                <Flex direction="col" directionMd="col" gap="gap-1" align="start">
                  <p className="text-neutral-700 font-medium">Our Faximile</p>
                  <p className="font-medium text-xl">+62217654522</p>
                </Flex>
                <div className="rounded-full bg-neutral-50 text-brand-600 p-3">
                  <FaFax size={35} />
                </div>
              </Flex>
            </Reveal>
          </Link>
          <Link href={"mailto:rakata@rakataheat.com"} target="_blank" className="bg-white p-6 border shadow-lg rounded-lg w-full max-w-sm hover:scale-110 duration-200">
            <Reveal>
              <Flex justify="justify-between">
                <Flex direction="col" directionMd="col" gap="gap-1" align="start">
                  <p className="text-neutral-700 font-medium">Send us email</p>
                  <p className="font-medium text-xl">rakata@rakataheat.com</p>
                </Flex>
                <div className="rounded-full bg-neutral-50 text-brand-600 p-3">
                  <FaEnvelope size={35} />
                </div>
              </Flex>
            </Reveal>
          </Link>
        </Flex>
      </Container>
    </section>
  );
};

export default ContactUsSection;
