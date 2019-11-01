import React, { Component } from "react";
import SkillCard from "./SkillCard";
class Skill extends Component {
  state = {
    mainSection: {
      cardTitle: "Web Dev Skills",
      cardSubtitle: "Mainly focus on web application development"
    },
    secoundSection: {
      cardTitle: "Other Dev Skills",
      cardSubtitle: "Most related to the mobile development"
    },
    mainSkills: [
      { title: "ASP.Net", num: 85, variant: "success" },
      { title: "HTML5", num: 75, variant: "success" },
      { title: "Javascript/JQuery/React", num: 70, variant: "success" },
      { title: "Bootstrap/CSS", num: 60, variant: "info" }
    ],
    secondSkills: [
      { title: "Java", num: 80, variant: "success" },
      { title: "Git/Scum/Kanban", num: 70, variant: "success" },
      { title: "C#/C++", num: 70, variant: "success" },
      { title: "Android/Kotlin/Swift", num: 60, variant: "info" }
    ]
  };
  render() {
    return (
      <div style={{ background: "#fff" }}>
        <div
          className="container border-container"
          id={this.props.id}
          style={{ minHeight: "100vh", height: "100%" }}
        >
          <div className="row align-items-center align-middle">
            <div className="skill-top col-lg-12 col-md-12 text-center align-middle">
              <h1 className="center-horizontal pt-5">Skills</h1>
              <p style={{ padding: "40px 30px 0 30px", fontSize: "20px" }}>
                I start my development journey from 2010. For years, I’ve been
                learning mobile development and web application development.
                Besides, I'm also exerpienced to work in a team because of the
                roles I've taken as a team leader several times during these
                years.
              </p>
            </div>
            <div className="skill-bottom col-lg-12 col-md-12">
              <div className="row">
                <SkillCard
                  content={this.state.mainSection}
                  skills={this.state.mainSkills}
                />
                <SkillCard
                  content={this.state.secoundSection}
                  skills={this.state.secondSkills}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
