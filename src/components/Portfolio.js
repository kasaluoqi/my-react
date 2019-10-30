import React, { Component } from "react";
import SingleProject from "./SingleProject";
class Portfolio extends Component {
  state = {
    projects: [
      {
        id: "1",
        title: "Project 1",
        subtitle: "Subtitle 1",
        description: "Description 1",
        link: "#link_1"
      },
      {
        id: "2",
        title: "Project 2",
        subtitle: "Subtitle 2",
        description: "Description 2",
        link: "#link_1"
      },
      {
        id: "3",
        title: "Project 3",
        subtitle: "Subtitle 3",
        description: "Description 3",
        link: "#link_1"
      },
      {
        id: "4",
        title: "Project 4",
        subtitle: "Subtitle 4",
        description: "Description 4",
        link: "#link_1"
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
      <div className="container border-container" id={this.props.id}>
        <div
          className="row align-items-center align-middle"
          style={{ minHeight: "100vh", height: "100%" }}
        >
          <div className="portfolio-top col-lg-12 col-md-12 text-center align-middle">
            <h1>Portfolio</h1>
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
                        name={"protfolio" + (+i + 1 + 2 * +r).toString()}
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
    );
  }
}

export default Portfolio;
