import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  displayAlert,
  clearAlert,
  registerUser,
} from "../features/user/userSlice";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, showAlert, user } = useSelector((store) => store.user);
  const [values, SetValues] = React.useState(initialState);
  const inputhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetValues({ ...values, [name]: value });
  };
  console.log(values);
  const submitHanlder = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      dispatch(displayAlert());
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      console.log("already member");
    } else {
      dispatch(registerUser(currentUser));
    }
  };
  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);
  React.useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
  const toggleHangler = () => {
    SetValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHanlder}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {!values.isMember && (
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
        <Button
          type="submit"
          disabled={isLoading}
          className={["btn btn-block"]}
        >
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
