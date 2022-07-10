import User from "../model/User.js";
import { StatusCodes } from "http-status-codes";
const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.sendStatus(StatusCodes.CREATED).json({ user });
  } catch (error) {
    next(error);
  }
};
const login = (req, res) => {
  res.send("login");
};
const updateUser = (req, res) => {
  res.send("updateUser");
};
export { register, login, updateUser };
