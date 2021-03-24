import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import RecipeService from '../services/recipe-service'
import SearchCard from "./search-card";

const Search = () => {
  const {recipeName} = useParams()
  const [searchRecipe, setSearchRecipe] = useState("")
  const [results, setResults] = useState([])
  const history = useHistory()
  useEffect(() => {
    setSearchRecipe(recipeName)
    if(recipeName) {
      RecipeService.findRecipeByName(recipeName)
        .then(response => {
          console.log(response)
          return setResults(response)
        })
    }

  },[recipeName])

  return (
      <div className="container">
        <h1>
          Find a recipe
        </h1>
        <div className="row">
          <input
            onChange={(e) => {
              setSearchRecipe(e.target.value)
            }}
            className="form-control col-sm-10"
            value={searchRecipe}
          />
          <button
            onClick={() => {
              if(searchRecipe) {
                history.push(`/search/${searchRecipe}`)
              } else {
                history.push(`/search`)
              }
            }}
            className="btn btn-dark col-sm-2">
            Search
          </button>
        </div>
        <br/>
        <div className="container-fluid">
          <div className="row justify-content-center">

            {
              results.length > 0 &&
              results.map(recipe =>
                <SearchCard
                  name={recipe.title}
                  recipeId={recipe.id}
                />
              )
            }
          </div>
        </div>

      </div>
  )
}

export default Search

// <li className="list-group-item" key={recipe.id}>
//     <Link to={`/details/${recipe.id}`}>
// {recipe.title}
// </Link>
// </li>