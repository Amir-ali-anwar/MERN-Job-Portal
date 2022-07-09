import React from "react";

const Button = ({ type, className, children, handleChange }) => {
  return (
    <button type={type} className={className} onClick={handleChange}>
      {children}
    </button>
  );
};

export default Button;
