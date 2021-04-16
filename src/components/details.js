import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import RecipeService from '../services/recipe-service'
import UserService from '../services/user-service'

const Details = () => {
  const [recipe, setRecipe] = useState({})
  const [loggedInUser, setLoggedInUser] = useState(null)
  const {recipeId} = useParams()
  const history = useHistory()

  const addRecipeToList = () => {
    const newSaved = loggedInUser.savedRecipes
    if(newSaved.includes(recipeId)) {
      return alert("Recipe is already in your list")
    }
    newSaved.push(recipeId)
    const newUser = {
      ...loggedInUser,
      savedRecipes: newSaved
    }
    UserService.updateUser(loggedInUser._id, newUser)
      .then(user => {
        console.log(user)
        return setLoggedInUser(user)
      })

  }

  useEffect(() => {
    RecipeService.findRecipeInformationById(recipeId)
      .then(response => {
        setRecipe(response)
        console.log(response)
      })

    UserService.getCurrentUser()
      .then(user => setLoggedInUser(user[0]))
  }, [recipeId])
  return (
      <div className="container">
        <h1>{recipe.title}</h1>
        <img className="details-image" src={recipe.image}/>

        {
          loggedInUser &&
          <div>
            <br/>
              <button onClick={() => addRecipeToList()}
                      className="btn btn-primary">
                Add to list
              </button>
            <br/>
          </div>
        }

        <h4>Information:</h4>
        <div>
          <ul>
            <li>Ready in <b>{recipe.readyInMinutes}</b> minutes</li>
            <li>Serves <b>{recipe.servings}</b></li>
          </ul>
        </div>
        <h4>Ingredients: </h4>

        <ul className="list-group">
        {
          recipe.extendedIngredients &&
          recipe.extendedIngredients.map(ingredient =>
              <li className="list-group-item" key={ingredient.id}>
                {ingredient.original}
              </li>
              )
        }
        </ul>
        <br/>
        <h4>Steps:</h4>
        <ul className="list-group">
          {
            recipe &&
            recipe.analyzedInstructions &&
            recipe.analyzedInstructions[0] &&
            recipe.analyzedInstructions[0].steps &&
            recipe.analyzedInstructions[0].steps.map(instruction =>
                <li className="list-group-item" key={instruction.number}>
                  {instruction.step}
                </li>
            )
          }
        </ul>
        <br/>
      </div>
  )

}

export default Details