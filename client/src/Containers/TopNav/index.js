import {
    Navbar, 
    Container, 
    Nav,
} from 'react-bootstrap'

const TopNav = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Projected</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/checkweather">Checkweather</Nav.Link>
              <Nav.Link href="/weathertrends">WeatherTrends</Nav.Link>
              <Nav.Link href="/trashtrends">Trash Trends</Nav.Link>
              <Nav.Link href="/ozonestatus">Ozone Status</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default TopNav;