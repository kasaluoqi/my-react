import React, { Component } from "react";
import monashLogo from "../assets/uni_monash_logo.png";
import ecnuLogo from "../assets/uni_east_china_normal_logo.png";
import tjunLogo from "../assets/uni_tianjin_logo.png";
class Education extends Component {
  state = {};
  render() {
    return (
      <div style={{ background: "#e9f0f5" }}>
        <div
          className="container border-container align-items-center justify-content-between "
          style={{ minHeight: "100vh", height: "100%" }}
          id={this.props.id}
        >
          <h1 className="center-horizontal pt-5">Education</h1>

          <div id="timeline">
            <div className="timeline-block">
              <div className="timeline-icon style-default" />
              <div className="timeline-content wow bounceInRight">
                <div className="row center-vertical">
                  <div className="col-md-3 col-sm-12 center-vertical">
                    <div className="center-horizontal">
                      <h2>Monash University</h2>
                      <img src={monashLogo} alt="" />
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <div className="row">
                      <p className="education">
                        Master of Information Technology
                      </p>
                      <p className="education">2017-2019</p>
                    </div>
                    <ul className="edu-desp">
                      <li>GPA: 3.063 / 4.0 (75.313%) Distinction</li>
                      <li>6 of 15 units are High distinction ( >=80%).</li>
                      <li>
                        5 of 7 elective units are relate to software
                        development.
                      </li>
                      <li>
                        Honours/Awards: International Merit Scholarship.
                        (2017-2019)
                      </li>
                    </ul>
                    <h6>Major Subjects:</h6>
                    <ul className="edu-desp">
                      <li>Internet Applications Development</li>
                      <li>Enterprise Application Development for the Web</li>
                      <li>Mobile And Distributed Computing Systems</li>
                      <li>Advanced Mobile Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-icon style-default" />
              <div className="timeline-content wow bounceInRight">
                <div className="row center-vertical">
                  <div className="col-md-3 col-sm-12 center-vertical">
                    <div className="center-horizontal">
                      <h2>East China Normal University</h2>
                      <img src={ecnuLogo} alt="" style={{ padding: "8px" }} />
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <div className="row">
                      <p className="education">
                        Master of Science in Engineering
                      </p>
                      <p className="education">2014-2017</p>
                    </div>
                    <ul className="edu-desp">
                      <li>GPA: 3.3 / 4.0 (83.172%) High Disctionction.</li>
                      <li>11 of 16 units are High distinction (>=80%).</li>
                      <li>
                        Worked as a Teaching Assistant in the course: Operating
                        System for one year.
                      </li>
                      <li>
                        Published a scholarly paper on the Journal of Electronic
                        Imaging.
                      </li>
                    </ul>
                    <h6>Major Subjects:</h6>
                    <ul className="edu-desp">
                      <li>
                        Human-computer interaction and visualization technology
                      </li>
                      <li>Computer Vision</li>
                      <li>Implementation of Data Management System</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-icon style-default" />
              <div className="timeline-content wow bounceInRight">
                <div className="row center-vertical">
                  <div className="col-md-3 col-sm-12 center-vertical">
                    <div className="center-horizontal">
                      <h2>Tianjin University</h2>
                      <img src={tjunLogo} alt="" style={{ padding: "8px" }} />
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <div className="row">
                      <p className="education">
                        Bachelor in Computer Science and Technology
                      </p>
                      <p className="education">2010-2014</p>
                    </div>
                    <ul className="edu-desp">
                      <li>GPA: 3.3 / 4.0 (Top 20%) High Distinction</li>
                      <li>Honours/Awards: Merit Student. (2011-2012)</li>
                      <li>
                        Honours/Awards: Third prize in "Challenge Cup" Academic
                        Competition. (2013)
                      </li>
                      <li>
                        As one of the percussionists of our university brass
                        band, attended several performances.
                      </li>
                    </ul>
                    <h6>Major Subjects:</h6>
                    <ul className="edu-desp">
                      <li>Principle of Programming (C++)</li>
                      <li>Data Structure</li>
                      <li>Algorithmic Design and Analysis</li>
                      <li>Assembly Language</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
