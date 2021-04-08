import React from 'react'
import {Link} from "react-router-dom";

const Followers = () => {

  return(
      <div className="container">
        <br/>
        <div className="row justify-content-between">
          <h1>#### Followers</h1>
          <h1>
            <span className="badge badge-secondary">
              Username
            </span>
          </h1>
        </div>

        <hr/>

        <div>
          <ul className="list-group">
            <li className="list-group-item">
              Follower's Username
            </li>
          </ul>
        </div>

      </div>
  )
}

export default Followers;