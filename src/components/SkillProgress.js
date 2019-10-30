import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
class SkillProgress extends Component {
  state = {};
  render() {
    return (
      <div style={{ paddingTop: "1px" }}>
        <h5>{this.props.title}</h5>
        <ProgressBar
          animated
          now={this.props.num}
          striped
          variant={this.props.variant}
          label={`${this.props.num}%`}
        />
      </div>
    );
  }
}

export default SkillProgress;
