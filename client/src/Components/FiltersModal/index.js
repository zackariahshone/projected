import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

import { useSelector } from 'react-redux';
import { truckCategories } from '../../appstore/Reducers/TruckSearch';

const currentFilters = ['distance', 'diect restrictions', 'categories', ' ratings']


const filterObj = {
  'Distance': ['10', '20', '30', '40'],
  'Diet Restriction': ['Gluten Free', 'No Peanuts', 'Alergy Free'],
  'Categories': [],
  'Ratings': ['1', '2', '3', '4', '5'],
}


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        {/* {currentFilters.map((filtertype, i) => (
          <>
            <Button> {filtertype.toUpperCase()} </Button>
            {i + 1 == currentFilters.length ? '' : <b>&#8226;</b>}
          </>
        ))} */}
        {Object.keys(filterObj).map((filterType, i) => {
          return(

          <>
            {/* <Button> {filterType.toUpperCase()} </Button> */}
            {/* {i + 1 == Object.keys(filterObj).length ? '' : <b>&#8226;</b>} */}

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {filterType}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filterObj[filterType].map(filter=>(
                <Dropdown.Item href="#/action-1">{filter}</Dropdown.Item>
              ))}
                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>

          </>
          )
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const FilterModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit Filters
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

