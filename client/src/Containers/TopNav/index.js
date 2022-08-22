import { Fragment } from 'react';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap'

const TopNav = () => {
  return (
    <Fragment>

      <Navbar bg="light" expand="lg">
        <Container>

          <Navbar.Brand href="/">Projected</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/foodtrucksnearby">Closest Food-Truck</Nav.Link>
              <Nav.Link href="/newfoodtrucks">New Food-Trucks</Nav.Link>
              <Nav.Link href="/trucksearch">Food-Truck Search</Nav.Link>
              <Nav.Link href="/recommendedtrucks">Recommended For You!!</Nav.Link>
              {/* <Navbar.Collapse className="justify-content-end"> */}
              {/* </Navbar.Collapse> */}
            </Nav>
            <Nav>
              <Navbar.Text className="justify-content-end">
               <Nav.Link href="/login"> Log In </Nav.Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default TopNav;