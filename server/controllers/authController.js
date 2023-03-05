import User from "../model/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
const register = async (req, res, next) => {
  const { name, email, password,confirmpass } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all the values");
  }
  const alreadyExist= await User.findOne({email})
  if(alreadyExist){
    throw new BadRequestError("Email already in use");
  }
  if(password !== confirmpass){
    throw new BadRequestError("Password and Confirm password should match");
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
  console.log('already',isAleadyMember);
  if (!isAleadyMember) {
    throw new UnAuthenticatedError("Not A Member? Please Register First");
  }
  if (!isAleadyMember.isVerified) {
    throw new UnAuthenticatedError("Please Verify your Email");
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
  // console.log(req.user.UserID);
   const { email, name, lastName, location } = req.body;
  if ((!name, !email, !lastName, !location)) {
    throw new BadRequestError("please fill all the fields");
  }
   const user = await User.findOne({ _id: req.user.UserID });

   user.email = email;
   user.name = name;
   user.lastName = lastName;
   user.location = location;

   await user.save();

   const token = user.CreateJWT();

   res.status(StatusCodes.OK).json({ user, token, location: user.location });
};
export { register, login, updateUser };
