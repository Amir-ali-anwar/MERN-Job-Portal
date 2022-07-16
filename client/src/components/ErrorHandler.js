import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../components/";
import { ErrorBoundary } from "react-error-boundary";
import Wrapper from "../assets/wrappers/RegisterPage";
const ErrorHandler = ({ error, resetErrorBoundary }) => {
  return (
    <Wrapper>
      <div role="alert">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
        <Button className={["member-btn"]} handleChange={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </Wrapper>
  );
};

export default ErrorHandler;
