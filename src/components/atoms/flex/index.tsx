import { FC, ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  className?: string;
  direction?: "row" | "col";
  align?: string;
  justify?: string;
  gap?: string;
}

const Flex: FC<FlexProps> = ({ children, className = "", direction = "row", align = "items-center", justify = "justify-start", gap = "gap-4" }) => {
  const directionClass = direction === "row" ? "flex-row" : "flex-col";

  return <div className={`flex ${directionClass} ${align} ${justify} ${gap} ${className}`}>{children}</div>;
};

export default Flex;
