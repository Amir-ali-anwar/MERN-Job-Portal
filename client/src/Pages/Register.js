import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  displayAlert,
  clearAlert,
  registerUser,
  loginUser,
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
  const submitHanlder = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      dispatch(displayAlert());
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      dispatch(loginUser(currentUser));
    } else {
      dispatch(registerUser(currentUser));
    }
  };
  React.useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
  const toggleHandler = () => {
    SetValues({ ...values, isMember: !values.isMember });
  };
   setTimeout(() => {
     dispatch(clearAlert());
   }, 2000);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={(e)=>e.preventDefault()}>
        {/* <Logo /> */}
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
          size="sm"
          type="submit"
          disabled={isLoading}
          className={["btn btn-block"]}
          handleChange={submitHanlder}
        >
          Submit
        </Button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <Button
            type="submit"
            className={["member-btn"]}
            handleChange={toggleHandler}
          >
            {!values.isMember ? "Login" : "Register"}
          </Button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
