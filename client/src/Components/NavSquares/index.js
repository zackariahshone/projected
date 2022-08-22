import {
    Col,
    Row,
    Container,
    Nav
} from 'react-bootstrap'
import Weather from '../../photos/great_weather.jpg'
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
    }
];

const NavSquares = () => {
    return (
        <Container 
            style = {{marginTop: '10%'}}
        >
            <Row>
                {routes.map((route) => (
                    <Col xs={12} md={6} lg={6} xl={6}>
                        <div className={`navSquare ${route.link}`}>
                            <Nav.Link href={route.link}>
                                <div className= "squareText">
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