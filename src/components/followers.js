import React, {useState, useEffect} from 'react'
import {useParams, Link} from "react-router-dom";
import UserService from "../services/user-service"
import PublicFollow from "./public-follow";

const Followers = () => {
  const {userId} = useParams()
  const [followersUser, setFollowersUser] = useState(null)

  useEffect(() => {
    if(userId) {
      UserService.getUserById(userId)
        .then(user => setFollowersUser(user))
    }
  },[])
  return(
      <div className="container">
        <br/>
        <div className="row justify-content-between">
          <h1>{followersUser
            && followersUser.followers.length} Followers</h1>
          <h1>
            <span className="badge badge-secondary">
              {followersUser && followersUser.username}
            </span>
          </h1>
        </div>

        <hr/>

        <div>
          <ul className="list-group">
            { followersUser &&
              followersUser.followers.map(follower =>
              <PublicFollow userId={follower}/>)
            }
          </ul>
        </div>

      </div>
  )
}

export default Followers;