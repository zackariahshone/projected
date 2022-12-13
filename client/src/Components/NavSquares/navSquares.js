import {
    Col,
    Row,
    Container,
    Nav
} from 'react-bootstrap'
import './style.css';
const squareColors = ['#80B0A4', '#D04F2C', '#D9AC36', '#D6742B', '#431E15'];
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
    let colorIndex = 0;
    let textIndex = squareColors.length;
    return (
        <Container 
            style = {{marginTop: '10%'}}
        >
            <Row>
                {routes.map((route,x) => {
                    colorIndex++;
                textIndex--;
                colorIndex = squareColors.length - 1 !== colorIndex ? colorIndex : 0;
                textIndex = textIndex !== 0 ? textIndex : squareColors.length - 1;     
                  return(  <Col key = {`col_${x}`} xs={12} md={6} lg={4} xl={4}>
                        <div key = {`square_${x}`} 
                             className={`navSquare ${route.link}`}
                             style={{backgroundColor:`${squareColors[colorIndex]}`}}
                             >
                            <Nav.Link key = {`square_link_${x}`} 
                                      href={route.link}
                                      style={{textDecoration:'none','color':`${squareColors[textIndex]}`}}
                                      >
                                <div key = {`square_info_${x}`} className= "squareText">
                                    {route.name}
                                </div>
                            </Nav.Link>
                        </div>
                    </Col>
                  )
                })}
            </Row>
        </Container>
    )
}

export default NavSquares;