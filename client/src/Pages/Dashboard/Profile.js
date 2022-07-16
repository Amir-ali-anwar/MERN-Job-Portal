import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import {
  displayAlert,
  clearAlert,
  UpdateUser,
} from "../../features/user/userSlice";
import { Button, FormRow, Alert } from "../../components";
import { getTokenFromLocalStorage } from "../../Utils/localStorage";
const Profile = () => {
  const { isLoading, showAlert, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [values, SetValues] = React.useState({
    name: user.name || "",
    email: user.email || "",
    lastname: user.lastName || "",
    location: user.location || "",
  });
  const inputhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetValues({ ...values, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, lastname, location } = values;
    if (!name || !email || !lastname || !location) {
      dispatch(displayAlert());
      return;
    }
    const updateUser = { name, email, lastname, location };
    dispatch(UpdateUser(updateUser));
  };
  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);
  return (
    <Wrapper>
      <form className="form" onSubmit={submitHandler}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            name="name"
            labelText="Name"
            className="form-input"
            labelClass="form-label"
            handleChange={inputhandler}
            value={values.name}
          />
          <FormRow
            name="lastname"
            labelText="Last Name"
            className="form-input"
            labelClass="form-label"
            handleChange={inputhandler}
            value={values.lastname}
          />
          <FormRow
            name="email"
            labelText="Email"
            type="email"
            className="form-input"
            labelClass="form-label"
            handleChange={inputhandler}
            value={values.email}
          />
          <FormRow
            name="location"
            labelText="Location"
            className="form-input"
            labelClass="form-label"
            handleChange={inputhandler}
            value={values.location}
          />
          <Button className="btn btn-block" disabled={isLoading}>
            {" "}
            {isLoading ? "Please Wait..." : "save changes"}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
