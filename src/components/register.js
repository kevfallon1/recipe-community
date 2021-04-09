import { Form, Input, Button, Checkbox } from 'antd';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import UserService from '../services/user-service.js'

const Register = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const register = () => {
    if(!firstName || !lastName || !username || !password) {
      return alert("All fields are required")
    }
    UserService.createUser({
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password
    }).then(response => console.log(response))

  }

  return (
      <div className="container">
        <div className="login-container">
          <br/>
          <h1 className="h1">
            Create an account
          </h1>

          <div>
            First Name
            <input className="form-control"
                   onChange={(e) => {
                     setFirstName(e.target.value)
                   }}
                   value={firstName}/>
          </div>

          <div>
            Last Name
            <input className="form-control"
                   onChange={(e) => {
                     setLastName(e.target.value)
                   }}
                   value={lastName}/>
          </div>

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
                register()} className="btn btn-dark">Register</button>
          </div>

        </div>
      </div>


  );
};

export default Register;