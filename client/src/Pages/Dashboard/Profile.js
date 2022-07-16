import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { Button, FormRow, Alert } from "../../components";
const Profile = () => {
  const inputhandler = () => {
    console.log("clicked");
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>Profile</h3>
        {/* {data.showAlert && <Alert />} */}
        <div className="form-center">
          <FormRow
            name="name"
            labelText=" Name"
            className="form-input"
            labelClass="form-label"
            handleChange={inputhandler}
          />
          <FormRow
            name="Last Name"
            labelText=" Last Name"
            className="form-input"
            labelClass="form-label"
            handleChange={inputhandler}
          />
          <FormRow
            name="email"
            labelText="Email"
            type="email"
            className="form-input"
            labelClass="form-label"
            handleChange={inputhandler}
          />
          <FormRow
            name="text"
            labelText="Location"
            className="form-input"
            labelClass="form-label"
            handleChange={inputhandler}
          />
          <Button className="btn btn-block">save changes</Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
