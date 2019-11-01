import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
class SkillProgress extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  increase() {
    const { percent } = this.state;
    const newPercent = percent + 1;
    if (newPercent >= this.props.num) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent: newPercent });
    this.tm = setTimeout(this.increase, 10);
  }

  render() {
    const { percent } = this.state;
    return (
      <div style={{ paddingTop: "1px" }}>
        <h5>{this.props.title}</h5>
        <ProgressBar
          now={percent}
          variant={this.props.variant}
          label={`${percent}%`}
        />
      </div>
    );
  }
}

export default SkillProgress;
