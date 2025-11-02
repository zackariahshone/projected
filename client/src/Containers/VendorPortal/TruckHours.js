import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, ButtonGroup } from 'react-bootstrap';

const BusinessHoursForm = ({ onSubmit }) => {
  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const [hours, setHours] = useState(
    daysOfWeek.map(day => ({
      day,
      open: '09:00',
      close: '17:00',
      closed: false
    }))
  );

  const handleChange = (index, field, value) => {
    const updated = [...hours];
    updated[index][field] = value;
    setHours(updated);
  };

  const handleCopyMonday = () => {
    const monday = hours[0];
    const updated = hours.map((item, index) =>
      index === 0 ? item : { ...item, ...monday, day: item.day }
    );
    setHours(updated);
  };

  const handleSetWeekdays = () => {
    const weekdayHours = hours[0]; // Monday as reference
    const weekendHours = { open: '10:00', close: '16:00', closed: false };
    const updated = hours.map((item, index) => {
      if (index < 5) return { ...item, ...weekdayHours, day: item.day };
      return { ...item, ...weekendHours, day: item.day };
    });
    setHours(updated);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) onSubmit(hours);
    console.log('Business hours:', hours);
  };

  return (
    <Card className="p-4 shadow-sm rounded-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Set Your Business Hours</h4>
        <ButtonGroup size="sm">
          <Button variant="outline-primary" onClick={handleCopyMonday}>
            Copy Monday to All
          </Button>
          <Button variant="outline-secondary" onClick={handleSetWeekdays}>
            Set Weekday/Weekend Hours
          </Button>
        </ButtonGroup>
      </div>

      <Form onSubmit={handleSubmit}>
        {hours.map((item, index) => (
          <Row key={item.day} className="align-items-center mb-3">
            <Col xs={4} md={3}>
              <Form.Label className="fw-semibold">{item.day}</Form.Label>
            </Col>
            <Col xs={3} md={3}>
              <Form.Control
                type="time"
                value={item.open}
                disabled={item.closed}
                onChange={e => handleChange(index, 'open', e.target.value)}
              />
            </Col>
            <Col xs={3} md={3}>
              <Form.Control
                type="time"
                value={item.close}
                disabled={item.closed}
                onChange={e => handleChange(index, 'close', e.target.value)}
              />
            </Col>
            <Col xs={2} md={2}>
              <Form.Check
                type="checkbox"
                label="Closed"
                checked={item.closed}
                onChange={e => handleChange(index, 'closed', e.target.checked)}
              />
            </Col>
          </Row>
        ))}

        <div className="text-end">
          <Button variant="primary" type="submit">
            Save Hours
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default BusinessHoursForm;
