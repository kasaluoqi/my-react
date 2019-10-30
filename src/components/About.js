import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "../assets/me.png"; // with import
class About extends Component {
  state = {};
  rederect = dest => {};
  render() {
    return (
      <div style={{ background: "#f9f9ff" }}>
        <div className="container border-container" id={this.props.id}>
          <div className="row align-items-center justify-content-between">
            <div className="left-col col-lg-6">
              <img className="img-fluid" src={me} alt="" />
            </div>
            <div className="right-col col-lg-5 col-md-12">
              <h1>About Myself</h1>
              <p>
                Master graduate student in Information Technology with a strong
                focus on web and mobile application development. Actively
                looking for internships opportunities.
              </p>
              <a
                className="iconButton"
                href="https://www.linkedin.com/in/hanfang-zhao-ba4635191/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
              </a>

              <a
                className="iconButton"
                href="https://github.com/kasaluoqi?tab=repositories"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
              </a>

              <a
                className="iconButton"
                href="https://github.com/kasaluoqi?tab=repositories"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fas", "file"]} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
