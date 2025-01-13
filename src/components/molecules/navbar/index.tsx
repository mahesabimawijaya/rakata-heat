"use client";

import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import { links } from "@/data/data";
import usePath from "@/hooks/usePath";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa";

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePath(1);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        path
          ? `fade-in sticky top-0 z-50 w-full h-20 flex items-center shadow-md bg-white`
          : `${scrolled ? "bg-white shadow-md" : "bg-transparent"} fade-in fixed z-50 w-full h-20 flex items-center duration-200`
      }
    >
      <Container className="w-full flex items-center justify-between relative">
        <Link href={"/"}>
          <Flex>
            <Image src={"/img/rakata-logo.png"} alt="logo" width={50} height={50} />
            <h1
              className={
                path
                  ? `text-[27px] text-brand-600 font-bold uppercase font-serif hidden md:block`
                  : `${scrolled ? "text-brand-600" : "text-white"} text-[27px] font-bold uppercase font-serif hidden md:block`
              }
            >
              Rakata Heat
            </h1>
          </Flex>
        </Link>
        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <div className={path ? `text-brand-600 font-medium hover:text-brand-500` : `${scrolled ? "text-brand-600" : "text-white"} font-medium hover:text-brand-400`}>
            <FaBars size={20} />
          </div>
        </button>
        <Flex gap="gap-[40px]" align="start" className="hidden lg:flex">
          {links.map((link, i) => (
            <Flex directionMd="col" gap="gap-[1px]" key={i}>
              <Link href={link.url}>
                <p
                  className={
                    path
                      ? `text-brand-600 font-medium hover:text-brand-500`
                      : `${scrolled ? "text-brand-600" : "text-white"} ${"/" + path === link.url ? "underline" : ""} font-medium hover:text-brand-400`
                  }
                >
                  {link.label}
                </p>
              </Link>
              {"/" + path === link.url && <span className="bg-brand-600 h-[2px] rounded-full w-full"></span>}
            </Flex>
          ))}
        </Flex>
      </Container>
      {isOpen && (
        <Flex direction="col" directionMd="col" gap="gap-10" align="start" className="absolute w-full top-0 left-0 bg-brand-700 h-screen text-white p-5 bg-opacity-90 backdrop-blur-sm">
          <Flex justify="justify-between" align="center">
            <Link href={"/"}>
              <h1 className="text-2xl font-bold font-serif">RAKA HEAT</h1>
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={30} />
            </button>
          </Flex>
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
        </Flex>
      )}
    </nav>
  );
};

export default Navbar;
