import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { displayAlert, clearAlert } from "../../features/user/userSlice";
import { Button, FormRow, Alert } from "../../components";
const Profile = () => {
  const { isLoading, showAlert, user } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const [values, SetValues] = React.useState({
    name: user.name || "",
    email: user.email || "",
    lastName: user.lastName || "",
    location: user.location || "",
  });
  console.log(values);
  const inputhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name", name);
    console.log("value", value);
    SetValues({ ...values, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    const { name, email, lastName, location } = values;
    if (!name || !email || !lastName || !location) {
      dispatch(displayAlert());
      return;
    }
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
            name="Last Name"
            labelText="Last Name"
            className="form-input"
            labelClass="form-label"
            handleChange={inputhandler}
            value={values.lastName}
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
            name="text"
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
