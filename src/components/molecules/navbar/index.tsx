"use client";

import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import { links } from "@/data/data";
import usePath from "@/hooks/usePath";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
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
        path ? `sticky top-0 z-50 w-full h-20 flex items-center shadow-md bg-white` : `${scrolled ? "bg-white shadow-md" : "bg-transparent"} fixed z-50 w-full h-20 flex items-center duration-200`
      }
    >
      <Container className="w-full flex items-center justify-between">
        <Link href={"/"}>
          <Flex>
            <Image src={"/img/rakata-logo.png"} alt="logo" width={50} height={50} />
            <h1 className={path ? `text-[27px] text-brand-600 font-bold uppercase` : `${scrolled ? "text-brand-600" : "text-white"} text-[27px] font-bold uppercase font-serif`}>Rakata Heat</h1>
          </Flex>
        </Link>
        <Flex gap="gap-[40px]">
          {links.map((link, i) => (
            <Link key={i} href={link.url}>
              <p
                className={
                  path
                    ? `text-brand-600 font-medium hover:text-brand-500 ${"/" + path === link.url ? "underline" : ""}`
                    : `${scrolled ? "text-brand-600" : "text-white"} ${"/" + path === link.url ? "underline" : ""} font-medium hover:text-brand-400`
                }
              >
                {link.label}
              </p>
            </Link>
          ))}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
