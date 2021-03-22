import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import RecipeService from '../services/recipe-service'

const Details = () => {
  const [recipe, setRecipe] = useState({})
  const {recipeId} = useParams()
  useEffect(() => {
    RecipeService.findRecipeInformationById(recipeId)
      .then(response => setRecipe(response))
  })
  return (
      <div className="container">
        <h1>{recipe.title}</h1>
        <img src={recipe.image}/>
      </div>
  )

}

export default Details