import React from 'react'

const FormRowSelect = ({
  labelText,
  name,
  value,
  handleChange,
  list,
  labelClass,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={labelText} className={labelClass}>
        {labelText}
      </label>
      <select
        name={name}
        value={value}
        className="form-select"
        onChange={handleChange}
      >
        {list.map((itemValue, index) => {
          return (
            <option value={itemValue} key={index}>
              {itemValue}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect