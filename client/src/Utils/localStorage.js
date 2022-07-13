const addUserToLocalStorage = ({ name, token, location }) => {
  localStorage.setItem("name", JSON.stringify(name));
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("location", JSON.stringify(location));
};
const removeUserToLocalStorage = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("token");
  localStorage.removeItem("location");
};
const getUserFromLocalStorage = () => {
  const User = localStorage.getItem("name");
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
