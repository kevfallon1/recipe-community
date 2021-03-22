const KEY = "&apiKey=c4ea9fb10bea41c2b2004c68475a5c3a"

const findRecipeByName = (name) =>
    fetch(`https://api.spoonacular.com/recipes/autocomplete?number=10&query=${name}${KEY}`, {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
const findRecipeInformationById = (id) =>
    fetch(`https://api.spoonacular.com/recipes/${id}/information${KEY}`, {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

const api = {
  findRecipeByName,
  findRecipeInformationById
}

export default api


//https://api.spoonacular.com/recipes/autocomplete?number=10&query=chick&apiKey=c4ea9fb10bea41c2b2004c68475a5c3a