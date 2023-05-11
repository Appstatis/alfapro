import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  restProps?: any;
};

export const Button = ({ children, className = "", ...restProps }: Props) => {
  return (
    <button className={`btn ${className}`} {...restProps}>
      {children}
    </button>
  );
};
