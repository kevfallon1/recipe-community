import { Form, Input, Button, Checkbox } from 'antd';
import React, {useState} from 'react'

const Register = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

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
            <button className="btn btn-dark">Register</button>
          </div>

        </div>
      </div>


  );
};

export default Register;