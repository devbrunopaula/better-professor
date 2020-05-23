import React from "react";
import "./styles/index.scss";
import Nav from "./components/Nav";
import Home from "./pages/Home-page";
import About from "./pages/About-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
