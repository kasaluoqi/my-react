import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";

class Navigation extends Component {
  state = {};
  render() {
    const navItemStyle = {
      paddingLeft: ".5em",
      paddingTop: ".5em",
      paddingBottom: ".5em",
      paddingRight: "10px",
      cursor: "pointer"
    };

    const headerStyle = {
      backgroundColor: "#f8f9fa",

      padding: "20px"
    };

    const navStyle = {
      position: "fixed",
      left: "0%",
      top: "0%",
      right: "0%",
      backgroundColor: "#f8f9fa",
      zIndex: "1024"
    };

    return (
      <header style={headerStyle}>
        <div className="container">
          <Navbar expand="lg" style={navStyle}>
            <div className="container">
              <Navbar.Brand href="/">Sam</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  <Link
                    activeClass="active"
                    to="aboutPanel"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    style={navItemStyle}
                  >
                    About Me
                  </Link>
                  <Link
                    activeClass="active"
                    to="skillPanel"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={700}
                    style={navItemStyle}
                  >
                    Skills
                  </Link>
                  <Link
                    activeClass="active"
                    to="eduPanel"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={700}
                    style={navItemStyle}
                  >
                    Education
                  </Link>
                  <NavDropdown
                    title="Portfolio"
                    id="portfolio-dropdown"
                    style={navItemStyle}
                  >
                    <div className="dropdown-item">
                      <Link
                        activeClass="active"
                        to="protfolio1"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={700}
                        style={navItemStyle}
                      >
                        Project 1
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link
                        activeClass="active"
                        to="portfolio2"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={700}
                        style={navItemStyle}
                      >
                        Project 2
                      </Link>
                    </div>
                  </NavDropdown>
                  <Nav.Link style={navItemStyle}>Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
      </header>
    );
  }
}

export default Navigation;
