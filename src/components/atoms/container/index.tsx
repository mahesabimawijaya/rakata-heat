import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}

const Container: FC<ContainerProps> = ({ children, className = "", maxWidth = "max-w-screen-xl" }) => {
  return <div className={`${className} ${maxWidth} mx-auto `}>{children}</div>;
};

export default Container;
