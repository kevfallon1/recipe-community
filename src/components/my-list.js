import React, {useState, useEffect} from 'react'
import UserService from '../services/user-service'
import MyListItem from "./my-list-item";

const MyList = () => {
  const [loggedInUser, setLoggedInUser] = useState(null)

  const removeItem = (recipeId) =>{
    const newSaved = loggedInUser.savedRecipes.filter(savedId => savedId !== recipeId)
    const newUser = {
      ...loggedInUser,
      savedRecipes: newSaved
    }
    UserService.updateUser(newUser._id, newUser)
      .then(user => setLoggedInUser(user))


  }

  useEffect(() => {
    UserService.getCurrentUser()
      .then(user => setLoggedInUser(user[0]))

  },[])

  return(
      <div className="container">
          <div className="row justify-content-center">

            <ul className="list-group my-list-item">
              {
                loggedInUser && loggedInUser.savedRecipes && loggedInUser.savedRecipes.map(recipeId =>
                    <MyListItem recipeId={recipeId} removeItem={removeItem}/> )
              }
            </ul>
          </div>
      </div>
  )

}



export default MyList