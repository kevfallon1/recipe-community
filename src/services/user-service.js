const URL = "http://recipe-community-node-server.herokuapp.com/api"
//const URL = "https://localhost:3000/api"


export const loginUser = (user) =>
    fetch(`${URL}/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())

export const logoutUser = () =>
    fetch(`${URL}/logout`, {
      method: "POST",
      credentials: 'include'
    }).then()

export const createUser = (newUser) =>
    fetch(`${URL}/register`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include'
    }).then(response => {
      try{
        return response.json()
      } catch(err) {
        return "0"
      }
    })

export const getCurrentUser = () =>
    fetch(`${URL}/profile`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())

export const getUserById = (userId) =>
    fetch(`${URL}/profile/${userId}`, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include'
    }).then(response => response.json())

export const addRecipeToUserList = (userId, recipeId) =>
  fetch(`${URL}/user/${userId}/recipe_list`, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({"savedRecipes": recipeId})
  }).then(response => response.json())

export const updateUser = (userId, user) =>
    fetch(`${URL}/user/${userId}/update_user`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user)
    }).then(response => response.json())

export const getAllUsers = () =>
    fetch(`${URL}/get_all_users`, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.json())

export const updatePost = (post, postId) =>
    fetch(`${URL}/user/posts/${postId}/update`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post)
    }).then(response => response.json())


const api = {
  loginUser,
  logoutUser,
  createUser,
  getCurrentUser,
  getUserById,
  addRecipeToUserList,
  updateUser,
  getAllUsers,
  updatePost
}

export default api;

