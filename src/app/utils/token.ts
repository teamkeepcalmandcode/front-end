export interface UserToken {
  isLogged: boolean;
  isAdmin: boolean;
}

export const getToken = (): UserToken => {
  return JSON.parse(localStorage.getItem("token"));
};

export const setToken = (isLogged, isAdmin) => {
  localStorage.setItem(
    "token",
    JSON.stringify({ isLogged: isLogged, isAdmin: isAdmin })
  );
};
