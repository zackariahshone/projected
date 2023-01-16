import React ,{ Fragment }from 'react';
import { useSelector } from 'react-redux';
import {
    Col,
    Row,
    Container,
    Nav
} from 'react-bootstrap';
import './style.css';
import { colorArray, ROUTES } from '../../GlobalConstanst';
import { isVender } from '../../appstore/Reducers/VenderReducers';
const NavSquares = () => {
    let colorIndex = 0;
    let textIndex = colorArray.length - 1;
    const isUserVender = useSelector(isVender);

    return (
        <Container
            // style={{ marginTop: '10%' }}
        >
            <div 
                
            >

            <Row>   
                {ROUTES.map((route, x) => {
                    if (route.protected && !isUserVender) {
                        return<Fragment
                            key={`${x}_squareFrag`}
                        />;
                    }
                    if (x > 0) {
                        colorIndex++;
                        textIndex--;
                    }
                    colorIndex = colorArray.length === colorIndex ? 0 : colorIndex;
                    textIndex = textIndex === -1 ? colorArray.length - 1 : textIndex;
                    return (<Col key={`col_${x}`} xs={12} md={6} lg={3} xl={3}>
                        <div key={`square_${x}`}
                            // style={{}}
                            className={`navSquare ${route.link}`}
                            style={{marginTop:'15%', backgroundColor: `${colorArray[colorIndex]}` }}
                        >
                            <Nav.Link key={`square_link_${x}`}
                                href={route.link}
                                style={{ textDecoration: 'none', 'color': `${colorArray[textIndex]}` }}
                            >
                                <div key={`square_info_${x}`} className="squareText">
                                    {route.name}
                                </div>
                            </Nav.Link>
                        </div>
                    </Col>
                    )
                })}
            </Row>
            </div>
        </Container>
    )
}

export default NavSquares;