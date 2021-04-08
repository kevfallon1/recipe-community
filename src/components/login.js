import { Form, Input, Button, Checkbox } from 'antd';
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
      <div className="container">
        <div className="login-container">
          <br/>
          <h1>
            Sign In
          </h1>

          <div>
            Username
            <input className="form-control"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              value={username}/>
          </div>

          <div>
            Password
            <input className="form-control"
              onChange={(e) => {
                 setPassword(e.target.value)
               }}
               value={password}
              type="password"/>
          </div>
          <br/>
          <div>
            <button className="btn btn-dark">Sign in</button>
          </div>
          <Link><span className="badge badge-secondary">Forgot Password</span></Link>
          <Link to="/register"><span className="badge badge-secondary">Sign up</span></Link>
        </div>
      </div>


  );
};

export default Login;