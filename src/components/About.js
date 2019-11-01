import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "../assets/me.png"; // with import
class About extends Component {
  state = {};
  rederect = dest => {};
  render() {
    return (
      <div style={{ background: "#e9f0f5" }}>
        <div className="container border-container" id={this.props.id}>
          <div
            className="row align-items-center justify-content-between"
            style={{ minHeight: "100vh", height: "100%" }}
          >
            <div className="left-col col-lg-6 wow fadeInLeft">
              <img className="img-fluid" src={me} alt="" />
            </div>
            <div className="right-col col-lg-5 col-md-12 wow fadeInRight">
              <h1 style={{ paddingTop: "10px" }}>About Myself</h1>
              <h3>Hi, I'm Hanfang Zhao.</h3>
              <p style={{ fontSize: "17px", padding: "10px 0" }}>
                I'm the master Graduate student in Information Technology from
                Monash with a strong focus on <strong>full-stack</strong> and{" "}
                <strong>mobile application development</strong>. Actively
                looking for a full-time job or internship opportunities.
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
                href="https://raw.githubusercontent.com/kasaluoqi/root/6cd45c440ba7518711c6078aead6d154f04be370/Software%20Engineer_Hanfang%20Zhao.pdf"
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
