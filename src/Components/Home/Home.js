import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App/App";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";
import Sponsors from "../Sponsors/Sponsors";
import registration from "../Registration/Registration";
import PageNotFound from "../PageNotFound/PageNotFound";
import Registration from "../Registration/Registration";

class Home extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/registration" component={Registration} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/events" component={Events} />
          <Route path="/sponsors" component={Sponsors} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Home;
