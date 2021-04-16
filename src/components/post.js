import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import RecipeService from '../services/recipe-service.js'
import UserService from '../services/user-service.js'

const Post = (post) => {

  const [recipe, setRecipe] = useState(null)
  const [hasLiked, setHasLiked] = useState(false)
  const [likesCache, setLikesCache] = useState(post.post.description[0].likes)
  const [postCache, setPostCache] = useState(post)
  const [loggedInUser, setLoggedInUser] = useState(null)


  useEffect(() => {
    RecipeService.findRecipeInformationById(post.post.description[0].recipeId)
      .then(response => {
        setRecipe(response)
      })

    UserService.getCurrentUser()
      .then(user => setLoggedInUser(user[0]))

  },[post.post.description[0].recipeId])

  const likePost = () => {
    if(loggedInUser._id) {
      likesCache.push(loggedInUser._id)
    }
    updateUser()
  }

  const undoLike = () => {
    const likeIndex = likesCache.indexOf(loggedInUser._id)
    likesCache.splice(likeIndex)
    updateUser()
    console.log(likesCache)
  }


  const updateUser = () => {
    const newPost = {
      "description": [
        {
          "userId": post.post.description[0].userId,
          "recipeId": post.post.description[0].recipeId,
          "description": post.post.description[0].description,
          "rating": post.post.description[0].rating,
          "comments": post.post.description[0].comments,
          "likes": likesCache
        }
      ],
      "_id": post.post._id
    }

    UserService.updatePost(newPost, newPost._id)
    .then(user => {
      setPostCache({post: user.posts.find(element => element._id = newPost._id)})
    })
  }



  return(
      <div className="jumbotron">
        <div className="row">

          <div className="col-3-lg ">
            <Link to={`/details/${recipe && recipe.id}`}>
              <img className="post-img" src={recipe && recipe.image}/>
            </Link>

          </div>
          <div className="col-9 post-container">
            <div className="row justify-content-between">
              <div>
                <Link to={`/details/${recipe && recipe.id}`}>
                  <h3>{recipe && recipe.title}</h3>
                </Link>
              </div>
              <div>
                <span className="badge badge-secondary">
                <h3>{post.post.description[0].rating}/5</h3>
              </span>
              </div>

            </div>
            <div className="row justify-content-between">
              <div className="">
                <p>{post.post.description[0].description}</p>
              </div>

            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          {
            likesCache && loggedInUser &&
            !likesCache.includes(loggedInUser._id) &&
            <button
                onClick={likePost}
                className="btn btn-primary">
              Like: {likesCache && likesCache.length}
            </button>
          }
          {
            likesCache && loggedInUser &&
                likesCache.includes(loggedInUser._id) &&
                <button
                  onClick={undoLike}
                  className="btn btn-danger">
                  Undo Like: {likesCache && likesCache.length}
                </button>
          }

        </div>
      </div>
  )


}

export default Post;