import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: "something went wrong",
  };
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    // defaultError.msg = err.message;
    // defaultError.msg = Object.values(err.message)
    //   .map((item) => item.message)
    //   .join(",");
  }
  // res.status(defaultError.statusCode).json({ msg: defaultError.msg });
  res.status(defaultError.statusCode).json({ msg: err });
};
export default errorHandlerMiddleware;
