import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Logo_white from "../../Asserts/logoHeader.png";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navpage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 80;
      const isScrolled = window.scrollY > scrollOffset;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/authlogin";
    navigate(path);
  };

  return (
    <Navbar
      expand="lg"
      className={`fixed-top shadow nav-tab ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="nav-logo">
          <img className="bg-light nav-logo" src={Logo_white} width={170} height={60} alt=""></img>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            <NavDropdown
              title="Home"
              id="basic-nav-dropdown"
              className="custom-dropdown fw-bold"
              style={{
                letterSpacing: "0.5px",
                marginRight: "10px",
              }}
            >
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              className="custom-dropdown fw-bold"
              style={{ letterSpacing: "0.5px", marginRight: "10px" }}
            >
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Gallery"
              id="basic-nav-dropdown"
              className="custom-dropdown fw-bold"
              style={{ letterSpacing: "0.5px", marginRight: "10px" }}
            >
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Blog"
              id="basic-nav-dropdown"
              className="custom-dropdown fw-bold"
              style={{ letterSpacing: "0.5px", marginRight: "10px" }}
            >
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Shop"
              id="basic-nav-dropdown"
              className="custom-dropdown fw-bold"
              style={{ letterSpacing: "0.5px", marginRight: "10px" }}
            >
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-white fw-bold" href="#link">
              Contact
            </Nav.Link>
          </Nav>
          <div className="buyer-button-home flex-end"><button className="btn-buyer transparent fw-bold nav-sign-btn" onClick={routeChange}>Sign in</button></div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navpage;
