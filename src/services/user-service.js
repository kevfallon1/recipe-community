const URL = "https://recipe-community-node-server.herokuapp.com/api"


export const loginUser = (user) =>
    fetch(`${URL}/login`, {
      "method": "POST",
      "body": JSON.stringify(user)
    }).then(response => response.json())

export const logoutUser = () =>
    fetch(`${URL}/logout`, {
      "method": "POST"
    }).then(response => response.json())

export const createUser = (newUser) =>
    fetch(`${URL}/register`, {
      "method": "POST"
    }).then(response => response.json())

export const getCurrentUser = () =>
    fetch(`${URL}/profile`, {
      "method": "GET"
    }).then(response => response.json())

const api = {
  loginUser,
  logoutUser,
  createUser,
  getCurrentUser
}

export default api;

