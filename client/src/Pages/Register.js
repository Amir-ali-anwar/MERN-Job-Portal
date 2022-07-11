import React from "react";
import { toast } from "react-toastify";

import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, Button, FormRow } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, SetValues] = React.useState(initialState);
  const inputhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetValues({ ...values, [name]: value });
  };
  const submitHanlder = (e) => {
    e.preventDefault();
  };
  const toggleHangler = () => {
    SetValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHanlder}>
        <Logo />
        <h3>{!values.isMember ? "Login" : "Register"}</h3>

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
