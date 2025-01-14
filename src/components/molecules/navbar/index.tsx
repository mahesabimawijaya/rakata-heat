"use client";

import { FC, useEffect, useState } from "react";
import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa";
import usePath from "@/hooks/usePath";
import { links } from "@/data/data";
import { Reveal } from "@/components/templates/Reveal";

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePath(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resolvedPath = `/${path || ""}`;

  return (
    <nav
      className={`${
        path
          ? "sticky top-0 z-50 w-full h-16 md:h-24 lg:h-28 flex items-center shadow-md bg-white"
          : `${scrolled ? "bg-white shadow-md" : "bg-transparent"} fixed z-50 w-full h-16 md:h-24 lg:h-28 flex items-center duration-200`
      }`}
    >
      <Container className="w-full flex items-center justify-between relative">
        <Link href="/">
          <Flex>
            <div className="relative w-[65px] h-[65px] lg:w-[120px] md:h-[120px]">
              <Image
                src="/img/rakata-logo.png"
                alt="logo"
                fill // Automatically fills the container
                priority
                sizes="(max-width: 768px) 65px, 100px"
                className="object-contain" // Ensures the image retains its aspect ratio
              />
            </div>
            <h1
              className={`${
                path
                  ? "text-[27px] text-brand-600 font-bold uppercase font-serif hidden md:block"
                  : `${scrolled ? "text-brand-600" : "text-white"} text-[27px] font-bold uppercase font-serif hidden md:block`
              }`}
            >
              Rakata Heat
            </h1>
          </Flex>
        </Link>
        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <div className={`${path ? "text-brand-600 font-medium hover:text-brand-500" : `${scrolled ? "text-brand-600" : "text-white"} font-medium hover:text-brand-400`}`}>
            <FaBars size={20} />
          </div>
        </button>
        <Flex gap="gap-[40px]" align="start" className="hidden lg:flex">
          {links.map((link, i) => (
            <Flex directionMd="col" gap="gap-[1px]" key={i}>
              <Link href={link.url}>
                <p className={`${path ? "text-brand-600 font-medium hover:text-brand-500" : `${scrolled ? "text-brand-600" : "text-white"} font-medium hover:text-brand-400`}`}>{link.label}</p>
              </Link>
              {resolvedPath === link.url && <span className="bg-brand-600 h-[2px] rounded-full w-full"></span>}
            </Flex>
          ))}
        </Flex>
      </Container>
      {isOpen && (
        <div>
          <Flex direction="col" directionMd="col" gap="gap-20" align="start" className="absolute w-full top-0 left-0 bg-brand-700 h-screen text-white p-5 bg-opacity-90 backdrop-blur-sm slide-right">
            <Flex justify="justify-between" align="center">
              <Link href={"/"}>
                <h1 className="text-2xl font-bold font-serif">RAKA HEAT</h1>
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes size={30} />
              </button>
            </Flex>
            <Reveal delay={0}>
              <Flex direction="col" directionMd="col" gap="gap-5" align="start" className="w-full">
                {links.map((link, i) => (
                  <Link key={i} href={link.url}>
                    <button onClick={() => setIsOpen(false)} className="w-full text-2xl font-medium flex justify-between">
                      <p>{link.label}</p>
                      <FaChevronRight />
                    </button>
                  </Link>
                ))}
              </Flex>
            </Reveal>
          </Flex>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
