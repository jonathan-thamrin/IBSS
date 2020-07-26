import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App/App";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";

class Home extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/events" component={Events} />
      </Router>
    );
  }
}

export default Home;
