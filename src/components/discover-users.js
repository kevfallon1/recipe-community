import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import UserService from '../services/user-service'


const DiscoverUsers = () => {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    UserService.getAllUsers()
      .then(response => setUsers(response))
  },[])
  return(
      <div className="container">
        <br/>
        <h3>Discover Users</h3>
        <ul className="list-group">
          {
            users && users.map(user =>
            <li className="list-group-item">
              <Link to={`/profile/${user._id}`}>{user.username}</Link>
            </li> )
          }
        </ul>

      </div>
  )
}

export default DiscoverUsers