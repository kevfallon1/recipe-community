import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import UserService from '../services/user-service.js'

const PublicFollow = (userId) => {

  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log(userId)
    UserService.getUserById(userId.userId)
    .then(response => setUser(response))
  }, [])

  return (
      <li className="list-group-item">
        <div className="row align-content-between">
          <Link to={`/profile/${userId.userId}`}>{user && user.username}</Link>
        </div>
      </li>
  )
}

export default PublicFollow