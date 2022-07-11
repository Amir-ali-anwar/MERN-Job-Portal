import User from "../model/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all the values");
  }
  const user = await User.create(req.body);
  return res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  res.send("login");
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};
export { register, login, updateUser };
