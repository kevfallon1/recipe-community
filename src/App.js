import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Search from './components/search';
import Details from "./components/details";
import Login from "./components/login";
import Home from './components/home'

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">Recipe Community</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/home">Home <span
                className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/search">Search</a>
          </div>
        </div>
      </nav>


      <BrowserRouter>
        <Route
          exact={true}
          path={["/home"]}>
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

        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
