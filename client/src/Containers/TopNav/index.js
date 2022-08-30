import { Fragment } from 'react';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap'


const navLinks = [
  {
    link: '/foodtrucksnearby',
    title: 'Closest Food-Truck'
  },
  {
    link: '/newfoodtrucks',
    title: 'New Food-Trucks'
  },
  {
    link: '/trucksearch',
    title: 'Food-Truck Search'
  },
  {
    link: '/recommendedtrucks',
    title: 'Recommended For You!!'
  },
]

const TopNav = () => {
  return (
    <Fragment>

      <Navbar bg="light" expand="lg">
        <Container>

          <Navbar.Brand href="/">Projected</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((nav) => (
                <Nav.Link href={nav.link}>{nav.title}</Nav.Link>
              ))}
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link href="/login"> Log In </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default TopNav;