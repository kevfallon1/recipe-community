import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import UserService from '../services/user-service'


const Admin = () => {

  const [users, setUsers] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    UserService.getAllUsers()
    .then(response => setUsers(response))

    UserService.getCurrentUser()
      .then(user => setLoggedInUser(user))
  },[])

  const deleteUser = (userId) =>
      UserService.updateUser(userId, {})
        .then(response => response)

  return(
      <div className="container">
        <br/>

        {
          loggedInUser && loggedInUser.type &&
              <div>
                <h3>Admin Panel</h3>
                <ul className="list-group">
                  {
                    users && users.map(user =>
                        <li className="list-group-item">
                          <Link to={`/profile/${user._id}`}>{user.username}</Link>
                          <button
                              onClick={() => deleteUser(user._id)}
                              className="btn btn-danger">Delete</button>
                        </li> )
                  }
                </ul>
              </div>
        }
        {
          loggedInUser && loggedInUser.type &&
          loggedInUser.type != "admin" &&
              <h1>RESTRICTED PAGE: ADMIN ONLY</h1>
        }
        {
          loggedInUser && !loggedInUser.type &&
              <h1>RESTRICED PAGE: ADMIN ONLY</h1>
        }

      </div>
  )
}

export default Admin