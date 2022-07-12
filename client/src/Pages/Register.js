import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayAlert, clearAlert } from "../features/user/userSlice";
import Alert from "../components/Alert";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, Button, FormRow } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, alertText, alertType, showAlert } = useSelector(
    (store) => store.user
  );
  const [values, SetValues] = React.useState(initialState);
  const inputhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetValues({ ...values, [name]: value });
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      dispatch(displayAlert());
      return;
    }
  };
  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);

  console.log(values);
  const toggleHangler = () => {
    SetValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHanlder}>
        <Logo />
        <h3>{!values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {values.isMember && (
          <FormRow
            name="name"
            labelText=" Name"
            className="form-input"
            labelClass="form-label"
            value={values.name}
            handleChange={inputhandler}
          />
        )}
        <FormRow
          name="email"
          labelText="Email"
          type="email"
          className="form-input"
          labelClass="form-label"
          value={values.email}
          handleChange={inputhandler}
        />
        <FormRow
          name="password"
          labelText="Password"
          type="password"
          className="form-input"
          labelClass="form-label"
          value={values.password}
          handleChange={inputhandler}
        />
        <Button type="submit" className={["btn btn-block"]}>
          Submit
        </Button>
        <p>
          {values.isMember ? "Already a member?" : "Not a member yet?"}
          <Button
            type="submit"
            className={["member-btn"]}
            handleChange={toggleHangler}
          >
            Login
          </Button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
