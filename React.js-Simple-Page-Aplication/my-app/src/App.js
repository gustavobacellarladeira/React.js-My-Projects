import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import NoMatch from "./containers/NoMatch";
import Layout from "./components/Layout/Layout";

import NavigationBar from './components/NavigationBar/NavigationBar'
import Jumbotron from './components/Jumbotron/Jumbotron'


const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
};

export default App;
