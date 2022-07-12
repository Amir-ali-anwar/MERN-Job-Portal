const addUserToLocalStorage = ({ user, token, location }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("location", JSON.stringify(location));
};
const removeUserToLocalStorage = ({ user, token, location }) => {
  localStorage.removeItem("user", JSON.stringify(user));
  localStorage.removeItem("token", JSON.stringify(token));
  localStorage.removeItem("location", JSON.stringify(location));
};
const getUserFromLocalStorage = ({ user, token, location }) => {
  const user = localStorage.getItem("user");
  const userResult = user ? JSON.parse(user) : null;
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
