import React, {useEffect, useState} from 'react'
import {useParams, Link, useHistory} from "react-router-dom";
import UserService from '../services/user-service.js'
import RecipeService from '../services/recipe-service'
import PostEditor from "./post-editor";

const ProfileEditor = () => {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const history = useHistory()
  const [newPostRecipe, setNewPostRecipe] = useState(null)
  const [userRecipes, setUserRecipes] = useState([])

  useEffect(() => {

    UserService.getCurrentUser()
      .then(user => {
        setLoggedInUser(user[0])
      })

    },[])

  useEffect(() => {
    if(loggedInUser) {
      loggedInUser.savedRecipes.forEach(savedRecipeId =>
          RecipeService.findRecipeInformationById(savedRecipeId)
          .then(recipe => {

            setUserRecipes(prevState => [...prevState, recipe])
          }))
    }
    console.log(userRecipes)

    }, [loggedInUser])

  const addPost = () => {

    if(newPostRecipe == null) {
      return alert("Please select a recipe before creating a post")
    }

    const newPost = {
      description: {
        userId: loggedInUser._id,
        recipeId: newPostRecipe,
        description: "ENTER DESCRIPTION",
        rating: 5,
        comments: [],
        likes: [loggedInUser._id]
      }

    }

    const newPosts = loggedInUser.posts
    newPosts.push(newPost)
    UserService.updateUser(loggedInUser._id, {
      ...loggedInUser,
      posts: newPosts
    }).then(user => {
      console.log(user)
      setLoggedInUser(user)
    })
  }

  const deletePost = (postId) => {
    const newPosts = loggedInUser.posts.filter(post => post._id != postId)
    UserService.updateUser(loggedInUser._id, {
      ...loggedInUser,
      posts: newPosts
    }).then(user => setLoggedInUser(user))
  }

  return (
      <div className="container">
        PROFILE EDITOR

        {
          loggedInUser && loggedInUser.type && loggedInUser.type === "ADMIN" &&
              <a href="/admin">To Admin Panel</a>
        }

        <br/>
        <div>
          <h1>{loggedInUser && loggedInUser.username}</h1>

        </div>

        <a href={`/profile/${loggedInUser && loggedInUser._id}`}>To actual profile</a>

        <div className="row">
          <div className="col-6">
            <ul className="list-group">

            </ul>
          </div>
          <div className="col-6">

          </div>
        </div>

        <hr/>
        {
          loggedInUser &&
            <div className="row">
              <button onClick={() => addPost()}
                className="btn btn-primary">Add Post</button>
              <select
                  onChange={(e) => setNewPostRecipe(e.target.value)}
                  className="form-control">
                <option disabled selected value> -- select a recipe to post -- </option>
                {
                  userRecipes.map(recipe =>
                    <option value={recipe.id}>{recipe.title}</option>)
                }
              </select>
            </div>
        }

        <br/>

        {
          loggedInUser && loggedInUser.posts &&
              loggedInUser.posts.map(post =>
                  <div>
                    <button
                        onClick={() => deletePost(post._id)}
                        className="btn btn-danger">Delete Post</button>
                    <PostEditor
                            post={post}/>
                  </div>
              )
        }

      </div>
  )
}

export default ProfileEditor
