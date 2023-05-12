import React from "react";

export const Button = ({
  children,
  className = "",
  ...restProps
}: {
  children: React.ReactNode;
  className?: string;
  restProps?: any;
}) => {
  return (
    <button className={`btn ${className}`} {...restProps}>
      {children}
    </button>
  );
};
