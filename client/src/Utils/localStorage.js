export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user") || "null";
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const addTokenToLocalStorage = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const RemoveTokenToLocalStorage = () => {
  localStorage.removeItem("token");
};

export const getTokenFromLocalStorage = () => {
  const result = localStorage.getItem("token") || "null";
  let user = result ? JSON.parse(result) : null;
  return user;
};
