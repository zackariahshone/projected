import { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, isLoggedIn, currentUser } from '../../appstore/Reducers/UserReducers';
import { venderLogout } from '../../appstore/Reducers/VenderReducers';
import { isVender } from '../../appstore/Reducers/VenderReducers';
import { ROUTES } from '../../GlobalConstanst';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap'
import { CgProfile } from 'react-icons/cg';

import './style.css';
const token = localStorage.getItem('authToken')
const TopNav = () => {
  const loggedInStatus = useSelector(isLoggedIn);
  const userInfo = useSelector(currentUser);
  const isUserVender = useSelector(isVender); 
  const dispatch = useDispatch();
  const [selected, setSelected] = useState();
  const navigate = useNavigate();
  useEffect(() => {

  }, [selected])
  return (
    <Fragment>

      <Navbar collapseOnSelect={true} bg="light" expand="lg">
        <Container>

          <Navbar.Brand href="/">Projected</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
              {ROUTES.map((nav, x) => {
                /**
                 * check status of user and route in order to expose
                 */
                if (nav.protected && !isUserVender) {
                  return <Fragment
                    key={`${x}_fragment`}
                  />;
                }
                return <Nav.Link
                  onClick={() => {
                    setSelected(nav.name)
                  }}
                  key={`nav_${x}`}
                  as={Link}
                  to={nav.link}
                  className={selected === nav.name ? 'active' : ''}
                >{nav.name}</Nav.Link>
              })}
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link
                onClick={() => {
                  setSelected('login')
                  if (loggedInStatus && token) {
                    dispatch(logout({ value: false, type: 'logout' }));
                    dispatch(venderLogout());
                    localStorage.setItem('authToken', null);
                  }
                }}
                className={selected === 'login' ? 'active' : ''}
                as={Link}
                to="/login"> {loggedInStatus ? `Hi ${userInfo?.firstName}! Sign Out Here` : `Sign In`}
              </Nav.Link>
            </Nav>
            {loggedInStatus ? <CgProfile
              className={selected === 'edit' ? 'active' : ''}
              title='Edit Profile'
              onClick={() => {
                setSelected('edit')
                navigate('/signUp')
              }}
            /> : ''}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default TopNav;