"use client";

import { usePathname } from "next/navigation";

const usePath = (position: number) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  return pathSegments[position] || "";
};

export default usePath;
