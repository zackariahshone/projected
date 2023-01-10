import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { DUMMY_IMG } from "../../GlobalConstanst";
import { CreateTruck } from "./CreateTruck";
import { isVender } from "../../appstore/Reducers/VenderReducers";
import { useSelector } from "react-redux";
import { TruckDisplay } from "../../Components/TruckDisplay/truckDisplay";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import './style.css'
export const EditTruck = ({selectedTruck})=>{
    const [userData, setUserData] = useState();
    const [truckSelected, setTruckSelected] = useState(selectedTruck);
    const navigate = useNavigate();
    const handleEdit = (venderInfo) => {
        console.log(venderInfo);
        fetch('/api/editTruck', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': localStorage.getItem('authToken'),
                'truckId':truckSelected._id
            },
            body: JSON.stringify(venderInfo),
        }).then(response => (
            console.log(response)
        ))
    }
    return (
        <Container >

            <center>
                <h1> Food Truck Editor </h1>
                <h4>Select a truck to start editing</h4>
            </center>
            { selectedTruck ? 
            
            <div className='signup-container'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Food Truck Name</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setUserData({
                                    ...userData,
                                    'name': e.target.value.trim()
                                })
                            }}
                            type="text" placeholder={selectedTruck.name} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Vender First Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'venderFirstName': e.target.value.trim()
                            })
                        }} type="text" placeholder={selectedTruck.venderFirstName} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Vender Last Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'venderLastName': e.target.value.trim()
                            })
                        }} type="text" placeholder={selectedTruck.venderLastName} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Food Truck Address</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'address': e.target.value.trim()
                            })
                        }} type="text" placeholder={selectedTruck.address} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>What flavors or food you have to offer</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'category': e.target.value.split(',')
                            })
                        }} type="text" placeholder={selectedTruck.category} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Food truck image</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'IMG': e.target.value.trim()
                            })
                        }} type="text" placeholder={selectedTruck.IMG} />
                    </Form.Group>
                    <label> Image Preview </label>
                     <img src={selectedTruck.IMG} alt='vendor image'/>
                    <Form.Group className="mb-3">
                        <Form.Label>Password for your Food truck account</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'pwd': e.target.value.trim()
                            })
                        }} type="text" placeholder="Address can change daily if needed" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Tell the Searchers about your truck!!</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setUserData({
                                    ...userData,
                                    'description': e.target.value
                                })
                            }}
                            as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Button
                    value={`Get Registered! `}
                    onClick={() => {
                        setUserData({
                            ...userData,
                            'truckId':truckSelected._id
                        })
                        handleEdit(userData);
                        // navigate('/vender')
                    }}
                >Edit that Truck !!!</Button>
            </div>
            :<></>}
        </Container>
    )
}