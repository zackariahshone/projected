import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style.css';
import BusinessHoursForm from "./TruckHours.js"
import { useSelector } from 'react-redux';
import { truckToEdit } from "../../appstore/Reducers/VenderPortal";

export const EditTruck = () => {
    const [form, setForm] = useState({});
    const [hours, setHours] = useState(null);
    const [error, setError] = useState(null);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();
    const truckBeingEdited = useSelector(truckToEdit);

    useEffect(() => {
        if (!truckBeingEdited) return;
        // populate form with existing truck data
        const initial = {
            name: truckBeingEdited.name || '',
            phone: truckBeingEdited.phone || '',
            venderFirstName: truckBeingEdited.venderFirstName || '',
            venderLastName: truckBeingEdited.venderLastName || '',
            address: truckBeingEdited.address || '',
            category: Array.isArray(truckBeingEdited.category) ? truckBeingEdited.category : (truckBeingEdited.category ? [truckBeingEdited.category] : []),
            IMG: truckBeingEdited.IMG || '',
            website: truckBeingEdited.website || '',
            pwd: truckBeingEdited.pwd || '',
            description: truckBeingEdited.description || '',
        }
        setForm(initial);
        if (truckBeingEdited.hours) setHours(truckBeingEdited.hours);
    }, [truckBeingEdited]);

    const setField = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

    const validate = () => {
        if (!form.name || form.name.trim().length < 2) return 'Please enter a valid truck name';
        if (!form.address || form.address.trim().length < 5) return 'Please enter a valid address';
        if (hours && Array.isArray(hours)) {
            const timeToMinutes = (t) => {
                if (!t || typeof t !== 'string') return null;
                const parts = t.split(':');
                if (parts.length !== 2) return null;
                const hh = parseInt(parts[0], 10);
                const mm = parseInt(parts[1], 10);
                if (Number.isNaN(hh) || Number.isNaN(mm)) return null;
                return hh * 60 + mm;
            }
            for (let i = 0; i < hours.length; i++) {
                const h = hours[i];
                if (!h) continue;
                if (!h.closed) {
                    if (!h.open || !h.close) return `Please set open and close times for ${h.day}`;
                    const o = timeToMinutes(h.open);
                    const c = timeToMinutes(h.close);
                    if (o === null || c === null) return `Invalid time format for ${h.day}`;
                    if (o >= c) return `${h.day}: opening time must be before closing time`;
                }
            }
        }
        return null;
    }

    const handleSave = async () => {
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }
        setError(null);
        setSaving(true);

        const payload = { ...form, hours: hours || undefined };

        try {
            const token = window.localStorage.getItem('authToken');
            const res = await fetch('/api/editTruck', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'token': token,
                    'truckId': truckBeingEdited?._id
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data?.message || 'Failed to update truck');
                setSaving(false);
                return;
            }
            // success: navigate back to vendor portal
            navigate('/vender');
        } catch (e) {
            setError(e.message || 'Network error');
        } finally {
            setSaving(false);
        }
    }

    return (
        <Container>
            <center>
                <h1> Edit Food Truck </h1>
                <p className="text-muted">Update the fields below and save changes.</p>
            </center>
            <div className='signup-container'>
                {error ? <Alert variant="danger">{error}</Alert> : null}
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Food Truck Name</Form.Label>
                                <Form.Control
                                    value={form.name || ''}
                                    onChange={(e) => setField('name', e.target.value)}
                                    type="text" placeholder="e.g. Tasty Tacos" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Primary Contact Phone</Form.Label>
                                <Form.Control
                                    value={form.phone || ''}
                                    onChange={(e) => setField('phone', e.target.value)}
                                    type="tel" placeholder="(555) 555-5555" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Vendor First Name</Form.Label>
                                <Form.Control
                                    value={form.venderFirstName || ''}
                                    onChange={(e) => setField('venderFirstName', e.target.value)}
                                    type="text" placeholder="First name" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Vendor Last Name</Form.Label>
                                <Form.Control
                                    value={form.venderLastName || ''}
                                    onChange={(e) => setField('venderLastName', e.target.value)}
                                    type="text" placeholder="Last name" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Food Truck Address</Form.Label>
                        <Form.Control
                            value={form.address || ''}
                            onChange={(e) => setField('address', e.target.value)}
                            type="text" placeholder="Street, City, State, ZIP" />
                    </Form.Group>

                    <BusinessHoursForm onChange={(h) => setHours(h)} onSubmit={(h) => setHours(h)} />

                    <Form.Group className="mb-3">
                        <Form.Label>What flavors or food you have to offer (comma separated)</Form.Label>
                        <Form.Control
                            value={form.category ? form.category.join(',') : ''}
                            onChange={(e) => setField('category', e.target.value.split(',').map(s => s.trim()))}
                            type="text" placeholder="e.g. tacos, burgers, vegan" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Food truck image URL</Form.Label>
                        <Form.Control
                            value={form.IMG || ''}
                            onChange={(e) => setField('IMG', e.target.value)}
                            type="text" placeholder="https://..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Optional: Website or Menu URL</Form.Label>
                        <Form.Control
                            value={form.website || ''}
                            onChange={(e) => setField('website', e.target.value)}
                            type="text" placeholder="https://..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password for your Food truck account (optional)</Form.Label>
                        <Form.Control
                            value={form.pwd || ''}
                            onChange={(e) => setField('pwd', e.target.value)}
                            type="password" placeholder="optional" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Tell the Searchers about your truck</Form.Label>
                        <Form.Control
                            value={form.description || ''}
                            onChange={(e) => setField('description', e.target.value)}
                            as="textarea" rows={3} />
                    </Form.Group>

                    <div className="text-end">
                        <Button variant="secondary" onClick={() => navigate('/vender')} className="me-2">Cancel</Button>
                        <Button variant="primary" disabled={saving} onClick={handleSave}>{saving ? 'Saving...' : 'Save Changes'}</Button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}