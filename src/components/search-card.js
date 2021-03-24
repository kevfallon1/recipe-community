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
        <Link to={`/details/${recipe.id}`}>
          <div className="card card-size">
            <img className="card-img-top search-img" src={recipe.image} alt="Card image cap"/>
              <div className="card-body">


                  <h4 className="card-title">{recipe.title}</h4>

              </div>
          </div>
        </Link>
    )
}
export default SearchCard;
