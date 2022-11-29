import {
    Col,
    Row,
    Container,
    Nav
} from 'react-bootstrap'
import './style.css';
const routes = [
    {
        name: 'Closest Food-Trucks',
        link: "foodtrucksnearby",
    },
    {
        name: 'New Food-Trucks',
        link: "newfoodtrucks"
    },
    {
        name: 'Food-Truck Search',
        link: "trucksearch"
    },
    {
        name: 'Recommended For You!',
        link: "recommendedtrucks"
    },
    {
        name:'new square',
        link: 'newlink'
    },
    {
        name:'newbox',
        link:'linkto_neverland'
    }
];

const NavSquares = () => {
    return (
        <Container 
            style = {{marginTop: '10%'}}
        >
            <Row>
                {routes.map((route,x) => (
                    <Col key = {`col_${x}`} xs={12} md={6} lg={4} xl={4}>
                        <div key = {`square_${x}`} className={`navSquare ${route.link}`}>
                            <Nav.Link key = {`square_link_${x}`} href={route.link}>
                                <div key = {`square_info_${x}`} className= "squareText">
                                    {route.name}
                                </div>
                            </Nav.Link>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default NavSquares;