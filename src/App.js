import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Country from "./components/country/Country";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Header />

        <Switch>

          <Route exact path="/">

            <Home />

          </Route>

          <Route exact path="/country/:id">
            
            <Country />

          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
