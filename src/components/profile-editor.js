import React, {useEffect, useState} from 'react'
import {useParams, Link, useHistory} from "react-router-dom";
import UserService from '../services/user-service.js'

const ProfileEditor = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  const history = useHistory()
  useEffect(() => {
      UserService.getCurrentUser()
        .then(user => setLoggedInUser(user))
    console.log(loggedInUser)
      if(!loggedInUser) {
        history.push("/login")
      }
    })

  return (
      <div className="container">
        <br/>
        <div>
          <h1>USERS USERNAME</h1>
        </div>

        <div className="row">
          <h3>
            <Link to={`/profile/followers`}>
              <span className="followers-badge badge badge-secondary badge-lg">
                Followers: ##
              </span>
            </Link>
          </h3>
          <h3>
            <Link to={`/profile/following`}>
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

export default ProfileEditor
