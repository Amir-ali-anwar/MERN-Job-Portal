import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};
const localVariables=(req,res,next)=>{
  req.app.locals= {
    OTP:null,
    resetsession:false
  }
  next()
}
export {auth,localVariables}
