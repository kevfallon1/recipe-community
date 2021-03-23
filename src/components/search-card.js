import React, {useState, useEffect} from 'react'
import RecipeService from '../services/recipe-service'
import {Link} from 'react-router-dom';

const SearchCard = ({
    name,
    recipeId
  }) => {
    const [recipe, setRecipe] = useState("")
    useEffect(() => {
      RecipeService.findRecipeInformationById(recipeId)
        .then(response => setRecipe(response))
    },[recipeId])

    return (
      <div className="card card-size">
        <img className="card-img-top search-img" src={recipe.image} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <Link to={`/details/${recipe.id}`}>
              <button className="btn btn-primary">Info</button>
            </Link>
          </div>
      </div>
    )
}
export default SearchCard;
