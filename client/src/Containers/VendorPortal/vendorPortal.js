import React, { Fragment, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DUMMY_IMG } from "../../GlobalConstanst";
import { CreateTruck } from "./CreateTruck";
import { EditTruck } from "./EditTruck";
import './style.css'

export const VendorPortal = () => {
    const [selection, setSelection] = useState();
    const directOptions = (selection) => {
        switch (selection) {
            case 'createTruck':
                return <CreateTruck/>;
            case 'editTruck':
                return <EditTruck/>;
            default:
                return <h2>Make a Selection</h2>;
        }
    }
    return (
        <Container style={{
            height: "100%",
            width: "100%"
        }}>
            <center><h1>Vendor Portal</h1></center>
            <Row>
                <Col sm={6}>
                    <div className="vendorImg">
                        <center><img className="vendorImg" src={DUMMY_IMG} /></center>
                    </div>
                </Col>
                <Col>
                    <div className="vendorInputForm">
                        <ui>
                            <li>
                                <button
                                    onClick={(e) => {
                                        setSelection("createTruck")
                                    }}
                                >Create Truck</button>
                            </li>
                            <li>
                                <button
                                    onClick={(e) => {
                                        setSelection("editTruck")
                                    }}
                                >Edit Trucks</button>
                            </li>
                        </ui>
                    </div>
                </Col>
            </Row>
            <Row>
                {directOptions(selection)}
            </Row>

        </Container>
    )
}