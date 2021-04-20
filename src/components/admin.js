import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import UserService from '../services/user-service'


const Admin = () => {

  const [users, setUsers] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    UserService.getAllUsers()
    .then(response => setUsers(response))

    UserService.getCurrentUser()
    .then(user => setLoggedInUser(user[0]))


  },[])


  const deleteUser = (userId) =>
      UserService.updateUser(userId, {})
        .then(response => {
          const newUsers = []
          users.map(user => {
            if(user._id !== userId) {
              newUsers.push(user)
            }
          })
          return setUsers(newUsers)
        })

  const addUser = () => {
    const newUser = {
      username: username,
      password: password
    }
    return UserService.adminCreateUser(newUser)
      .then(user => setUsers(prevState => [...prevState, newUser])
      )
  }


  return(
      <div className="container">
        <br/>

        {
          loggedInUser && loggedInUser.type && loggedInUser.type === "ADMIN" &&
              <div>
                <h3>Admin Panel</h3>
                <div className="row justify-content-between">
                  <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      placeholder="Enter username" className="form-control"/>
                  <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Enter password" className="form-control"/>
                  <button
                      onClick={addUser}
                      className="btn btn-block btn-primary">Create User</button>
                </div>
                <br/>
                <ul className="list-group">
                  {
                    users && users.map(user => {
                      if(user.type !== "ADMIN") {
                        return(

                              <li className="list-group-item ">
                                <div className="row justify-content-between">
                                  <Link to={`/profile/${user._id}`}>{user.username}</Link>
                                  <button
                                      onClick={() => deleteUser(user._id)}
                                      className="btn btn-danger">Delete</button>
                                </div>
                              </li>

                            )
                      }


                    }
                         )
                  }
                </ul>
              </div>
        }
        {
          loggedInUser && loggedInUser.type &&
          loggedInUser.type !== "ADMIN" &&
              <h1>RESTRICTED PAGE: ADMIN ONLY</h1>
        }
        {
          loggedInUser && !loggedInUser.type &&
              <h1>RESTRICTED PAGE: ADMIN ONLY</h1>
        }
        {
          !loggedInUser &&
            <h1>RESTRICTED PAGE: ADMIN ONLY</h1>
        }

      </div>
  )
}

export default Admin