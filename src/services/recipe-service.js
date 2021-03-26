const KEY = process.env.REACT_APP_RECIPE_KEY

const findRecipeByName = (name) =>
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete?query=${name}&number=12`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": KEY,
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      }
    }) .then(response => response.json())
const findRecipeInformationById = (id) =>
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": KEY,
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      }
    })
      .then(response => response.json())
const findRandomRecipes = () =>
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=3&tags=american%2Clunch%2Cdinner", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": KEY,
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      }
    })
    .then(response => response.json())

const api = {
  findRecipeByName,
  findRecipeInformationById,
  findRandomRecipes
}

export default api


