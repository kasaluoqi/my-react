import React, { Component } from "react";
import SingleProject from "./SingleProject";

import healthme from "../assets/healthme.jpg";
import regvic from "../assets/regionalvic.jpg";
import smarter from "../assets/smarter.jpg";
import parkingsystem from "../assets/parkingsystem.jpg";
class Portfolio extends Component {
  state = {
    projects: [
      {
        id: "1",
        title: "Regional",
        subtitle: "VIC",
        description:
          "ASP.NET Core web app demoed data visualisation with Mapbox and recommendation system ",
        link: "https://github.com/kasaluoqi/RegionalVIC",
        imgUrl: regvic
      },
      {
        id: "2",
        title: "Health",
        subtitle: "Me",
        description:
          "An ASP.NET MVC project demoed routine generation and time reservations service. ",
        link: "https://github.com/kasaluoqi/HealthMe",
        imgUrl: healthme
      },
      {
        id: "3",
        title: "Smart",
        subtitle: "ER",
        description:
          "An Android client application & RESTful web server which demoed data communication.",
        link: " https://github.com/kasaluoqi/SmartER",
        imgUrl: smarter
      },
      {
        id: "4",
        title: "Parking",
        subtitle: "System",
        description:
          "An IOS application with IoT functions to control and monitor the sensors of Raspberry Pi 3.",
        link: "https://github.com/kasaluoqi/ParkingSystem",
        imgUrl: parkingsystem
      }
    ]
  };

  render() {
    const rows = [...Array(Math.ceil(this.state.projects.length / 2))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      this.state.projects.slice(idx * 2, idx * 2 + 2)
    );

    return (
      <div style={{ background: "#fff" }}>
        <div className="container border-container" id={this.props.id}>
          <div
            className="row align-items-center align-middle"
            style={{ minHeight: "100vh", height: "100%" }}
          >
            <div className="portfolio-top col-lg-12 col-md-12 text-center align-middle">
              <h1 className="center-horizontal pt-5">Portfolio</h1>
              <p>These are the projects I've done.</p>
            </div>
            <div className="portfolio-bottom col-lg-12 col-md-12">
              {// map the rows as div.row
              productRows.map((e, r) => {
                return (
                  <div className="row" key={r}>
                    {rows.map((p, i) => (
                      <div className="col-lg-6 col-md-12" key={e[i].id}>
                        <SingleProject
                          name={"portfolio" + (+i + 1 + 2 * +r).toString()}
                          imgUrl={e[i].imgUrl}
                          proTitle={e[i].title}
                          proSubtitle={e[i].subtitle}
                          proLink={e[i].link}
                          proDescription={e[i].description}
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
              {/* 
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <SingleProject />
              </div>

              <div className="col-lg-6 col-md-12">
                <SingleProject />
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
