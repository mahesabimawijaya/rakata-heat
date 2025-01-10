import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, className = "", startIcon, endIcon, loading = false, disabled, ...rest }) => {
  const loadingClass = loading ? "loading" : "";

  return (
    <button className={`${loadingClass} ${className}`} disabled={disabled || loading} {...rest}>
      {startIcon && !loading && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && !loading && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};
