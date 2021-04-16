import React, {useState, useEffect} from 'react'
import RecipeService from '../services/recipe-service'
import {Link} from 'react-router-dom';


const MyListItem = ({
  recipeId,
  removeItem
}) => {
  const [recipe, setRecipe] = useState("")
  useEffect(() => {
    RecipeService.findRecipeInformationById(recipeId)
    .then(response => setRecipe(response))
  },[recipeId])

  return (

        <li className="list-group-item">
          <Link to={`/details/${recipe.id}`}>

          <div className="">
            <img className="list-img" src={recipe.image} alt="Card image cap"/>
            <h4>{recipe.title}</h4>

          </div>
        </Link>
          <button onClick={() => removeItem(recipeId)}
                  className="btn btn-danger">Remove</button>
        </li>

  )
}
export default MyListItem;