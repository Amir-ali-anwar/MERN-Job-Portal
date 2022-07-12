import { UnAuthenticatedError } from "../errors/index.js";
const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.UserID === resourceUserId.toString()) return;
  throw new UnAuthenticatedError("No authorized to access this route");
};
export default checkPermissions;
