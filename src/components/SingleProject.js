import React, { Component } from "react";
import WOW from "wowjs";
class SingleProject extends Component {
  state = {};
  componentDidMount() {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }
  render() {
    return (
      <div className="project-item" id={this.props.name}>
        <div className="d-flex justify-content-between">
          <div className="top-left">
            <h4>{this.props.proTitle}</h4>
            <p>{this.props.proSubtitle}</p>
          </div>
          <div className="top-right">
            <a
              href={this.props.proLink}
              className="btn btn-outline-primary"
              data-text="Check it"
            >
              Check it
            </a>
          </div>
        </div>
        <div
          className="wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <p>{this.props.proDescription}</p>
        </div>
      </div>
    );
  }
}

export default SingleProject;
