import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayAlert } from "../features/user/userSlice";
const Alert = () => {
  const { alertText, alertType } = useSelector((store) => store.user);

  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
