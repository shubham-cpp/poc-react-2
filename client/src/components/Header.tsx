import { ReactElement } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";

const Header = (): ReactElement => {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="border-bottom border-primary rounded shadow"
      >
        <Container>
          <Navbar.Brand as={RouterLink} to="/" className="mr-auto">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="me-auto">
              {/*Some empty div to push link to right */}
            </div>
            <Nav className="some">
              <Nav.Link as={RouterLink} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={RouterLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={RouterLink} to="/admission">
                Admission
              </Nav.Link>
              <Nav.Link as={RouterLink} to="/images">
                Images
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
