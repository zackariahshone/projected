// import { data } from 'jquery';
import { Button, Container, Form } from 'react-bootstrap';
import { getData } from '../../genUtils/requests'
const RecommendedTrucks = () => {
    return (
        // <></>
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button
                    title={"Push this button"}
                    onClick={() => {
                      getData().then((response) => {
                        })
                    }}
                >
                    Push me Please!!!
                </Button>
            </Form>
        </Container>
    );
}

export default RecommendedTrucks;