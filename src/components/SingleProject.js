import React, { Component } from "react";
import WOW from "wowjs";
class SingleProject extends Component {
  state = {
    // hovered: false
  };

  onMouseEnter = e => {
    this.setState({ hovered: true });
  };

  onMouseLeave = e => {
    this.setState({ hovered: false });
  };
  componentDidMount() {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }

  render() {
    // const { hovered } = this.state;
    // const style = hovered
    //   ? {
    //       background: `linear-gradient(
    //   rgba(144, 172, 209, 0.9),
    //   rgba(144, 172, 209, 0.9)
    // ),
    // url(${this.props.imgUrl})`,
    //       color: "#fff"
    //     }
    //   : {
    //       background: `linear-gradient(
    //         rgba(255, 255, 255, 0.5),
    //         rgba(255, 255, 255, 0.5)
    // ),
    // url(${this.props.imgUrl})`
    //     };
    return (
      <div
        // className="project-item"
        id={this.props.name}
        // style={style}
      >
        <div className="content wow fadeInUpBig">
          <div className="grid">
            <figure className="effect-chico">
              <img src={this.props.imgUrl} alt={this.props.name} />
              <figcaption>
                <h2>
                  {this.props.proTitle} <span>{this.props.proSubtitle}</span>
                </h2>
                <p>{this.props.proDescription}</p>
                <a
                  href={this.props.proLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View more
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      // <div
      //   className="project-item wow flipInX"
      //   id={this.props.name}
      //   onMouseEnter={this.onMouseEnter}
      //   onMouseLeave={this.onMouseLeave}
      //   style={style}
      // >
      //   <div className="d-flex justify-content-between">
      //     <div className="top-left">
      //       <h4>{this.props.proTitle}</h4>
      //       <p>{this.props.proSubtitle}</p>
      //     </div>
      //     <div className="top-right">
      //       <a
      //         href={this.props.proLink}
      //         className="btn btn-outline-primary"
      //         data-text="Check it"
      //       >
      //         Check it
      //       </a>
      //     </div>
      //   </div>
      //   <div
      //     className="wow fadeIn"
      //     data-wow-duration="2s"
      //     data-wow-delay="0.2s"
      //   >
      //     <p>{this.props.proDescription}</p>
      //   </div>
      // </div>
    );
  }
}

export default SingleProject;
