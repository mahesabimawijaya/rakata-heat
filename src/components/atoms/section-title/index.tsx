import { FC, ReactNode } from "react";
import Flex from "../flex";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <Flex direction="col" directionMd="col" align="start" gap="gap-1" className="w-fit">
      <h2 className="text-3xl font-bold text-brand-700 font-serif">{children}</h2>
      <span className="w-full h-[2px] bg-brand-700 rounded-full"></span>
    </Flex>
  );
};

export default SectionTitle;
