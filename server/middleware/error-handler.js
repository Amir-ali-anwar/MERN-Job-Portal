import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    StatusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: "something went Wrong, try again later",
  };
  res.send(500).json({ msg: err });
};
export default errorHandlerMiddleware;
