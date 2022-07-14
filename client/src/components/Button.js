import React from "react";

const Button = ({
  type,
  className,
  children,
  handleChange,
  disabled,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={handleChange}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
