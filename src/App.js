import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";

class App extends Component {
  state = {};

  getFullStyle = () => {
    return {
      height: "100%"
    };
  };

  render() {
    return (
      <div>
        <Navigation />
        <About id="aboutPanel" />
        <Skill id="skillPanel" />
        <Education id="eduPanel" />
        <Portfolio id="portflPanel" />
      </div>
    );
  }
}

export default App;
