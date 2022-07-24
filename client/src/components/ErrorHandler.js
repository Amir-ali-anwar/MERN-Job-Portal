import React from "react";
import { Button } from "../components/";
import Wrapper from "../assets/wrappers/Navbar";
const ErrorHandler = ({ error, resetErrorBoundary }) => {
  return (
    <Wrapper className="error-boundary-div">
      <div role="nav-center">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
        <div className="btn-container">
          <Button className={"btn"} handleChange={resetErrorBoundary}>
            Try again
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorHandler;
