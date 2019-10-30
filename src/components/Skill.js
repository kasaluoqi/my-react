import React, { Component } from "react";
import SkillCard from "./SkillCard";
class Skill extends Component {
  state = {
    mainSection: {
      cardTitle: "Web Dev Skills",
      CardSubtitle: ""
    },
    secoundSection: {
      cardTitle: "Other Dev Skills",
      CardSubtitle: ""
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
      <div className="container border-container" id={this.props.id}>
        <div
          className="row align-items-center align-middle"
          style={{ minHeight: "100vh", height: "100%" }}
        >
          <div className="skill-top col-lg-12 col-md-12 text-center align-middle">
            <h1>Skills</h1>
            <p>Yeah it is me.</p>
          </div>
          <div className="skill-bottom col-lg-12 col-md-12"></div>
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
    );
  }
}

export default Skill;
