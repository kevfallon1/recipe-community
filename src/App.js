import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Search from './components/search';
import Details from "./components/details";
import Login from "./components/login";
import Home from './components/home'
import Profile from "./components/profile";
import Register from "./components/register";
import Followers from "./components/followers";
import Following from "./components/following";
import ProfileEditor from "./components/profile-editor";
import MyList from "./components/my-list";
import UserService from "./services/user-service";
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import DiscoverUsers from "./components/discover-users";

function App() {
  const history = useHistory()
  const [loggedInUser, setLoggedInUser] = useState(null)
  useEffect(() => {
    UserService.getCurrentUser()
      .then(user => {
        console.log(user)
        setLoggedInUser(user)
      })
  },[])
  const logoutUser = () => {
    UserService.logoutUser()
    .then(response => {
      setLoggedInUser(null)
    })
    history.push("/")
  }

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="/">Recipe Community</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Home <span
                className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/search">Search</a>
          </div>
          {
            !loggedInUser &&
            <div className="navbar-nav">
              <a className="nav-item nav-link float-right"
                 href="/login">Login</a>
            </div>
          }
          {
            loggedInUser &&
            <div className="navbar-nav">
              <a className="nav-item nav-link float-right" href="/profile">Profile</a>
            </div>
          }
          {
            loggedInUser &&
            <div className="navbar-nav">
              <a className="nav-item nav-link float-right" href="/mylist">My
                List</a>
            </div>
          }

          <div className="navbar-nav">
            <a className="nav-item nav-link float-right" href="/discover-users">Discover Users</a>
          </div>

          {
            loggedInUser &&
            <div className="navbar-nav">
              <a onClick={logoutUser}
                  className="nav-item nav-link float-right">Logout</a>
            </div>
          }
        </div>
      </nav>


      <BrowserRouter>
        <Route
          exact={true}
          path={["/"]}>
          <Home/>
        </Route>
        <Route
          exact={true}
          path={["/search", "/search/:recipeName"]}>
          <Search/>
        </Route>
        <Route
          exact={true}
          path={["/details/:recipeId"]}>
          <Details/>
        </Route>
        <Route
          exact={true}
          path={["/login"]}>
          <Login/>
        </Route>
        <Route
            exact={true}
            path={["/register"]}>
            <Register/>
        </Route>
        <Route
          exact={true}
          path={["/profile/:userId"]}>
          <Profile/>
        </Route>
        <Route
            exact={true}
            path={["/profile"]}>
          <ProfileEditor/>
        </Route>
        <Route
          exact={true}
          path={["/profile/:userId/followers"]}>
          <Followers/>
        </Route>
        <Route
            exact={true}
            path={["/profile/:userId/following"]}>
          <Following/>
        </Route>
        <Route
          exact={true}
          path={["/mylist"]}>
          <MyList/>
        </Route>
        <Route
          exact={true}
          path={["/discover-users"]}>
          <DiscoverUsers/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
