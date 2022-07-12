import React from "react";

const Button = ({ type, className, children, handleChange, disabled }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={handleChange}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
