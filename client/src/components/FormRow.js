import React from "react";

const FormRow = ({
  type,
  className,
  handleChange,
  labelText,
  labelClass,
  value,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={labelText} className={labelClass}>
        {labelText}
      </label>
      <input
        type={type || "text"}
        className={className}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormRow;
