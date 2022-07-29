import React from "react";

const Button = ({
  type,
  className,
  children,
  handleChange,
  disabled,
  key,
  ...rest
}) => {
  return (
    <button
      key={key}
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
