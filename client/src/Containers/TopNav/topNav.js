import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, isLoggedIn, currentUser } from '../../appstore/Reducers/UserReducers';
import { ROUTES } from '../../GlobalConstanst';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap'

const token = localStorage.getItem('authToken')
const TopNav = () => {
  const loggedInStatus = useSelector(isLoggedIn);
  const userInfo = useSelector(currentUser);
  const dispatch = useDispatch();
  return (
    <Fragment>

      <Navbar bg="light" expand="lg">
        <Container>

          <Navbar.Brand href="/">Projected</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {ROUTES.map((nav, x) => {
                /**
                 * check status of user and route in order to expose
                 */
                if (nav.protected && !loggedInStatus) {
                  return;
                }
                return <Nav.Link key={`nav_${x}`} href={nav.link}>{nav.name}</Nav.Link>
              })}
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link
                onClick={() => {
                  if (loggedInStatus && token) {
                    dispatch(logout({ value: false, type: 'logout' }));
                    localStorage.setItem('authToken',null)
                  }
                }}
                href="/login"> {loggedInStatus ? `Hi ${userInfo.firstName}! Sign Out Here` : `Sign In`}

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default TopNav;