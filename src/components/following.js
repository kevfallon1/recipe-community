import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";

const Following = () => {

  const {userId} = useParams();


  return(
      <div className="container">
        <br/>
        <div className="row justify-content-between">
          <h1>Following ####</h1>

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
              <div className="row justify-content-between">
                <h4>Following user's Username</h4>
                {
                  userId == "undefined" &&
                  <button className="btn btn-danger">Remove</button>
                }
              </div>
            </li>
          </ul>
        </div>

      </div>
  )
}

export default Following;