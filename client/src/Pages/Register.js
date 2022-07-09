import React from "react";
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
  const submitHanlder = (e) => {
    e.preventDefault();
  };
  const toggleHangler = () => {
    console.log("clicked");
    SetValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHanlder}>
        <Logo />
        <h3>{!values.isMember ? "Login" : "Register"}</h3>

        {values.isMember && (
          <FormRow
            labelText=" Name"
            type="text"
            className="form-input"
            labelClass="form-label"
          />
        )}
        <FormRow
          labelText="Email"
          type="email"
          className="form-input"
          labelClass="form-label"
        />
        <FormRow
          labelText="Password"
          type="password"
          className="form-input"
          labelClass="form-label"
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
