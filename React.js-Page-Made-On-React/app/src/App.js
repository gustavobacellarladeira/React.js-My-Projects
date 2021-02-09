import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
