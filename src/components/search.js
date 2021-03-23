import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import RecipeService from '../services/recipe-service'

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
    console.log(results)
  },[recipeName])

  return (
      <div className="container">
        <h1>
          Find a recipe
        </h1>
        <input
          onChange={(e) => {
            setSearchRecipe(e.target.value)
          }}
          className="form-control"
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
          className="btn btn-primary">
          Search
        </button>
        <ul className="list-group">

          {
            results.length > 0 &&
            results.map(recipe =>
              <li className="list-group-item" key={recipe.id}>
                <Link to={`/details/${recipe.id}`}>
                  {recipe.title}
                </Link>
              </li>
            )
          }
        </ul>

      </div>
  )
}

export default Search