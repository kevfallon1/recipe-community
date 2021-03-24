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

const api = {
  findRecipeByName,
  findRecipeInformationById
}

export default api


//https://api.spoonacular.com/rec ipes/autocomplete?number=10&query=chick&apiKey=c4ea9fb10bea41c2b2004c68475a5c3a