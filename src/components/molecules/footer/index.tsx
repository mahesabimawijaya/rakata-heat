import Container from "@/components/atoms/container";
import Image from "next/image";
import Flex from "@/components/atoms/flex";
import { FC } from "react";
import { FaEnvelope, FaFax, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { links } from "@/data/data";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-brand-800 to-brand-500 text-white mt-20 rounded-t-[50px]">
      <Container>
        <Flex align="start" justify="justify-between" className="py-16">
          <Flex className="bg-white p-3 rounded-lg h-fit">
            <div className="relative w-14 h-12">
              <Image src={"/img/rakata-logo.png"} alt="logo" fill />
            </div>
            <h2 className="uppercase text-brand-600 font-serif font-bold text-xl">RAKATA HEAT</h2>
          </Flex>
          <Flex direction="col" align="start" className="max-w-sm">
            <p className="font-medium text-center mb-2">Company</p>
            {links.map((link, i) => (
              <Link key={i} href={link.url} className="text-sm">
                {link.label}
              </Link>
            ))}
          </Flex>
          <Flex direction="col" align="start" className="max-w-sm">
            <p className="font-medium text-center mb-2">Get In Touch</p>
            <Flex align="start">
              <FaMapMarkerAlt className="flex-shrink-0" size={20} />
              <p className="text-sm">Perum. Permata Pamulang. Kp. Tanah Sewaan Blok D No. 17 RT. 03 RW008 Kel. Bakti Jaya. Kec. Setu Tangerang Selatan 15315, Banten</p>
            </Flex>
            <Flex>
              <FaPhoneAlt size={20} />
              <p className="text-sm">+62217654512</p>
            </Flex>
            <Flex>
              <FaFax size={20} />
              <p className="text-sm">+62217654522</p>
            </Flex>
            <Flex>
              <FaEnvelope size={20} />
              <p className="text-sm">rakata@rakataheat.com</p>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
