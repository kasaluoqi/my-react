import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";

class Navigation extends Component {
  state = {};
  render() {
    const navItemStyle = {
      paddingLeft: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      paddingRight: "10px",
      cursor: "pointer"
    };

    const headerStyle = {
      backgroundColor: "#e9f0f5",
      fontWeight: "500",
      fontSize: "18px",
      padding: "20px",
      fontFamily: "'Poppins', sans-serif"
    };

    const navStyle = {
      position: "fixed",
      left: "0%",
      top: "0%",
      right: "0%",
      color: "#000",
      backgroundColor: "#e9f0f5",
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
                    offset={-40}
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
                    offset={-70}
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
                    offset={-70}
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
                        to="portfolio1"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                        style={navItemStyle}
                      >
                        RegionalVIC
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link
                        activeClass="active"
                        to="portfolio2"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                        style={navItemStyle}
                      >
                        HealthMe
                      </Link>
                    </div>

                    <div className="dropdown-item">
                      <Link
                        activeClass="active"
                        to="portfolio3"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                        style={navItemStyle}
                      >
                        SmartER
                      </Link>
                    </div>

                    <div className="dropdown-item">
                      <Link
                        activeClass="active"
                        to="portfolio4"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                        style={navItemStyle}
                      >
                        ParkingSystem
                      </Link>
                    </div>
                  </NavDropdown>
                  <Link
                    activeClass="active"
                    to="contactPanel"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    style={navItemStyle}
                  >
                    Contact
                  </Link>
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
