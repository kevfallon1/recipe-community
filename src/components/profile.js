import React, {useEffect, useState} from 'react'
import {useParams, Link} from "react-router-dom";

const Profile = () => {
  const {userId} = useParams()
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    if(userId) {
      //TODO Change this to UserService
      /*
      RecipeService.findRecipeByName(userId)
      .then(response => {
        console.log(response)
        return setCurrentUser(response)
      })

       */
  }})

  return (
      <div className="container">
        <br/>
        <div>
          <h1>USERS USERNAME</h1>
        </div>

        <div className="row">
          <h3>
            <Link to={`/profile/${userId}/followers`}>
              <span className="followers-badge badge badge-secondary badge-lg">
                Followers: ##
              </span>
            </Link>
          </h3>
          <h3>
            <Link to={`/profile/${userId}/following`}>
              <span className="badge badge-secondary">
                Following: ##
              </span>
            </Link>
          </h3>
        </div>
        <h3></h3>
        <hr/>

      </div>
  )
}

export default Profile
