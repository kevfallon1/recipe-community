import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import UserService from '../services/user-service.js'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const login = () => {
    if(!username || !password) {
      return alert("Both fields are required")
    }
    UserService.loginUser({
      username: username,
      password: password
    }).then(response => {
      console.log(response)
      if(response.length > 0){
        history.push('/profile')
        window.location.reload(false)
      } else {
        alert("Username or password incorrect")
      }

    })
  }

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
            <button onClick={() =>
              login()
            } className="btn btn-dark">Sign in</button>
          </div>
          <Link><span className="badge badge-secondary">Forgot Password</span></Link>
          <Link to="/register"><span className="badge badge-secondary">Sign up</span></Link>
        </div>
      </div>


  );
};

export default Login;