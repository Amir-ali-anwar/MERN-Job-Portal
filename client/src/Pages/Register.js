import React from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, SetValues] = React.useState(initialState);
  const [toggle, SetToggle] = React.useState(false);
  const submitHanlder = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHanlder}>
        <Logo />
        <h3>Register</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" class="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Email
          </label>
          <input type="text" id="name" class="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Password
          </label>
          <input type="text" id="name" class="form-input" />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <button type="button" class="member-btn">
            Login
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
