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
    const squareColors = ['#80B0A4', '#D04F2C', '#D9AC36', '#D6742B', '#431E15','#428F5A'];
    let colorIndex = 0;
    let textIndex = squareColors.length - 1;
    return (
        <Container 
            style = {{marginTop: '10%'}}
        >
            <Row>
                {routes.map((route,x) => {

                if(x > 0){
                colorIndex++;
                textIndex--;
                }
                colorIndex = squareColors.length === colorIndex ? 0: colorIndex;
                textIndex = textIndex === -1 ?  squareColors.length-1 : textIndex ;   
                console.log(`Color Index: ${colorIndex} Text Index: ${textIndex}`)  
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