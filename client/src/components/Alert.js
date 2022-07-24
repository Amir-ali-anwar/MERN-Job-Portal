import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const { alertText:userText, alertType:userAlert } = useSelector((store) => store.user);
  const { alertText: jobText, alertType:jobAlert } = useSelector((store) => store.Job);
  const { alertText:statsText, alertType:statsAlert } = useSelector((store) => store.Stats);
  return (
    <div className={`alert alert-${jobAlert || userAlert || statsAlert}`}>
      {statsText || userText || jobText}
    </div>
  );
};

export default Alert;
