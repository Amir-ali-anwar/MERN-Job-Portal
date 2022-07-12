import React from "react";
import { useSelector } from "react-redux";
const Alert = () => {
  const { alertText, alertType } = useSelector((store) => store.user);

  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
