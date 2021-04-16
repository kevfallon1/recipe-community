import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import RecipeService from '../services/recipe-service.js'
import UserService from '../services/user-service.js'

const PostEditor = (post, deletePost) => {

  const [recipe, setRecipe] = useState(null)
  const [editing, setEditing] = useState(false)
  const [postCache, setPostCache] = useState(post)
  const [postDescription, setPostDescription] = useState(post.post.description[0].description)
  const [rating, setRating] = useState(post.post.description[0].rating)

  useEffect(() => {
    RecipeService.findRecipeInformationById(post.post.description[0].recipeId)
    .then(response => {
      setRecipe(response)
    })

    console.log("DELETE POST")
    console.log(deletePost)

  },[])

  const updatePost = () => {
    const newPost = {
      "description": [
        {
          "userId": post.post.description[0].userId,
          "recipeId": post.post.description[0].recipeId,
          "description": postDescription,
          "rating": rating,
          "comments": post.post.description[0].comments,
          "likes": post.post.description[0].likes
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
        <div className="row justify-content-end">
          {
            !editing &&
              <button
                  onClick={() => setEditing(true)}
                  className="btn btn-primary">Edit</button>
          }


          {
            editing &&
                <button
                    onClick={() => {
                      updatePost()
                      setEditing(false)
                    }

                    }
                    className="btn btn-success">Save</button>

          }
          {
            editing &&
                <button
                    onClick={deletePost}
                    className="btn btn-danger">Delete</button>
          }
        </div>
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
                {
                  !editing &&
                  <span className="badge badge-secondary">
                    <h3>{postCache.post && postCache.post.description[0].rating}/5</h3>
                  </span>
                }
                {
                  editing &&
                  <span
                      className="badge badge-secondary">
                    <select
                        onChange={e => setRating(e.target.value)}
                        value={rating}
                        className="form-control">
                      <option

                          value={"1"}>
                        1
                      </option>
                      <option
                          value={"2"}>
                        2
                      </option>
                      <option
                          value={"3"}>
                        3
                      </option>
                      <option
                          value={"4"}>
                        4
                      </option>
                      <option
                          value={"5"}>
                        5
                      </option>
                    </select>
                    <h3>/5</h3>
                  </span>
                }

              </div>

            </div>
            <div className="row justify-content-between">
              <div className="">
                {
                  !editing &&
                  <p>
                  {postCache.post && postCache.post.description[0].description}</p>
                }
                {
                  editing &&
                  <textarea
                      onChange={e =>
                        setPostDescription(e.target.value)

                      }
                      value={postDescription}
                      className="form-control"></textarea>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-end">
          <button className="btn btn-primary">
            Like: {post.post.description[0].likes && post.post.description[0].likes.length}
          </button>
        </div>
      </div>
  )
}

export default PostEditor;