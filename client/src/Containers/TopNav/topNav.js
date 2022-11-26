import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap'
import {
  isLoggedIn
} from '../../appstore/Reducers/UserReducers'

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
  {
    link:'neverland',
    title: 'new box'
  }
]

const TopNav = () => {
  const [loggedIn, setLoggedIn] =useState();
  const loggedInStatus = useSelector(isLoggedIn);

  return (
    <Fragment>

      <Navbar bg="light" expand="lg">
        <Container>

          <Navbar.Brand href="/">Projected</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((nav,x) => (
                <Nav.Link key = {`nav_${x}`} href={nav.link}>{nav.title}</Nav.Link>
              ))}
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link href="/login"> {loggedInStatus ? `Sign Out` : `Sign In`} </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default TopNav;