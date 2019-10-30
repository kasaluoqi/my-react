import React, { Component } from "react";
import monashLogo from "../assets/uni_monash_logo.png";
import ecnuLogo from "../assets/uni_east_china_normal_logo.png";
import tjunLogo from "../assets/uni_tianjin_logo.png";
class Education extends Component {
  state = {};
  render() {
    return (
      <div style={{ background: "#f9f9ff" }}>
        <div
          className="container border-container align-items-center justify-content-between "
          style={{ minHeight: "100vh", height: "100%" }}
          id={this.props.id}
        >
          <h1 className="center-horizontal pt-5">Education</h1>
          <div className="row center-vertical">
            <div className="col-4">
              <div className="center-horizontal">
                <h2>Monash University</h2>
                <img src={monashLogo} alt="" />
              </div>
            </div>
            <div className="col-1" />
            <div className="col-7">
              <div className="row">
                <p className="education">Master of Information Technology</p>
                <p className="education">2017 - 2019</p>
              </div>
              <ul className="edu-desp">
                <li>GPA: 3.0 / 4.0</li>
              </ul>
            </div>
          </div>

          <div className="row center-vertical">
            <div className="col-4">
              <div className="center-horizontal">
                <h2>East China Normal University</h2>
                <img src={ecnuLogo} alt="" style={{ padding: "8px" }} />
              </div>
            </div>
            <div className="col-1" />
            <div className="col-7 center-horizontal">Content 2</div>
          </div>

          <div className="row center-vertical">
            <div className="col-4">
              <div className="center-horizontal">
                <h2>Tianjin University</h2>
                <img src={tjunLogo} alt="" style={{ padding: "8px" }} />
              </div>
            </div>
            <div className="col-8 center-horizontal">Content 3</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
