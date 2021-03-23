import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import RecipeService from '../services/recipe-service'

const Details = () => {
  const [recipe, setRecipe] = useState({})
  const {recipeId} = useParams()
  useEffect(() => {
    RecipeService.findRecipeInformationById(recipeId)
      .then(response => {
        setRecipe(response)
        console.log(response)
      })
  }, [recipeId])
  return (
      <div className="container">
        <h1>{recipe.title}</h1>
        <img src={recipe.image}/>
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