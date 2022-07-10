const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.send(500).json({ msg: "there is error " });
};
export default errorHandlerMiddleware;
