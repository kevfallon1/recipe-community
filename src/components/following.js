import React, {useState, useEffect} from 'react'
import {useParams, Link} from "react-router-dom";
import UserService from "../services/user-service"
import PublicFollow from "./public-follow";

const Following = () => {

  const {userId} = useParams();
  const [followingUser, setFollowingUser] = useState(null)
  useEffect(() => {
    if(userId) {
      UserService.getUserById(userId)
        .then(user => setFollowingUser(user))
    }
  },[])


  return(
      <div className="container">
        <br/>
        <div className="row justify-content-between">
          <h1>Following {followingUser && followingUser.following.length}</h1>

          <h1>
            <span className="badge badge-secondary">
              {followingUser && followingUser.username}
            </span>
          </h1>
        </div>

        <hr/>

        <div>
          <ul className="list-group">
            {
              followingUser && followingUser.following.map(follow =>
                <PublicFollow userId={follow}/>)
            }
          </ul>
        </div>

      </div>
  )
}

export default Following;