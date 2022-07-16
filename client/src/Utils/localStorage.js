const addUserToLocalStorage = ({ user, token, location }) => {
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("location", JSON.stringify(location));
};
const removeUserToLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("location");
};
const getUserFromLocalStorage = () => {
  const User = localStorage.getItem("user");
  const userResult = User ? JSON.parse(User) : null;
  const token = localStorage.getItem("token");
  const tokenResult = token ? JSON.parse(token) : null;
  const location = localStorage.getItem("location");
  const locationResult = token ? JSON.parse(location) : null;
  return {
    userResult,
    tokenResult,
    locationResult,
  };
};
export {
  addUserToLocalStorage,
  removeUserToLocalStorage,
  getUserFromLocalStorage,
};
