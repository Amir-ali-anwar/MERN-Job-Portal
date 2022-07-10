const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.send(500).json({ msg: err });
};
export default errorHandlerMiddleware;
