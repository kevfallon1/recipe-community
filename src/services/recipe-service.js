//const KEY = "c4ea9fb10bea41c2b2004c68475a5c3a"
//const KEY = "e6210499dff1442bb1e2018dbd53f78c"
//const KEY = "3e83621fcc2f49a2b8811fcf1cdd4123"
const KEY = "5c057cd6807143d8be2b918c04a594e8"

const findRecipeByName = (name) =>
    fetch(`https://api.spoonacular.com/recipes/autocomplete?number=12&query=${name}&apiKey=${KEY}`, {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
const findRecipeInformationById = (id) =>
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}`, {
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.json())

const api = {
  findRecipeByName,
  findRecipeInformationById
}

export default api


//https://api.spoonacular.com/rec ipes/autocomplete?number=10&query=chick&apiKey=c4ea9fb10bea41c2b2004c68475a5c3a