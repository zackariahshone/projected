import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';

export const SideScroll = ({truckList})=>{
const truckListB = [1,2,3,4,5,6,7,8]
    
    return(
        <div style={{display: 'inline-block'}}>

        {/* // <Container className='horizontal-scrollable'> */}
            {/* <Row className="horizontal-scrollable row"> */}
                {truckListB.map((truck)=>(
                    <div className='col-xs-4'>
                        <p>{truck}</p>
                    </div>
                ))
}
            {/* </Row> */}
        {/* // </Container> */}
        </div>
    )
}