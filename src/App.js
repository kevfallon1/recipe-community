import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Search from './components/search';
import Details from "./components/details";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Route
          exact={true}
          path={["/"]}>

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
      </BrowserRouter>
    </div>
  );
}

export default App;
