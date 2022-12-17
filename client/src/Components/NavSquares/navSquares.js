import {
    Col,
    Row,
    Container,
    Nav
} from 'react-bootstrap'
import './style.css';
import { colorArray, ROUTES } from '../../GlobalConstanst';

const NavSquares = () => {
    let colorIndex = 0;
    let textIndex = colorArray.length - 1;
    return (
        <Container 
            style = {{marginTop: '10%'}}
        >
            <Row>
                {ROUTES.map((route,x) => {

                if(x > 0){
                colorIndex++;
                textIndex--;
                }
                colorIndex = colorArray.length === colorIndex ? 0: colorIndex;
                textIndex = textIndex === -1 ?  colorArray.length-1 : textIndex ;   
                  return(  <Col key = {`col_${x}`} xs={12} md={6} lg={4} xl={4}>
                        <div key = {`square_${x}`} 
                             className={`navSquare ${route.link}`}
                             style={{backgroundColor:`${colorArray[colorIndex]}`}}
                             >
                            <Nav.Link key = {`square_link_${x}`} 
                                      href={route.link}
                                      style={{textDecoration:'none','color':`${colorArray[textIndex]}`}}
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