import User from "../model/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all the values");
  }
  const user = await User.create(req.body);
  const token = user.CreateJWT();
  return res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please enter email and password");
  }
  const isAleadyMember = await User.findOne({ email }).select("+password");
  if (!isAleadyMember) {
    throw new UnAuthenticatedError("Please enter email and password");
  }
  const isPassword = await isAleadyMember.comparePassword(password);
  if (!isPassword) {
    throw new UnAuthenticatedError("Invalid credentials");
  }
  const token = isAleadyMember.CreateJWT();
  isAleadyMember.password = undefined;
  res
    .status(StatusCodes.OK)
    .json({ isAleadyMember, token, location: isAleadyMember.location });
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};
export { register, login, updateUser };
