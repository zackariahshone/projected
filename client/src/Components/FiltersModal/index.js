import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { truckSearchFilters } from '../../appstore/Reducers/FilterReducers';
import { setFilters,getFilters,removeFilters } from '../../appstore/Reducers/FilterReducers';
import { truckCategories } from '../../appstore/Reducers/TruckSearch';

import { useSelector, useDispatch } from 'react-redux';
import { Row } from 'react-bootstrap';

const currentFilters = ['distance', 'diect restrictions', 'categories', ' ratings']


const filterObj = {
  'Distance': ['10', '20', '30', '40'],
  'Diet Restriction': ['Gluten Free', 'No Peanuts', 'Alergy Free'],
  'Categories': [],
  'Ratings': ['1', '2', '3', '4', '5'],
}


function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch();
  // const currentFilters = useSelector(truckSearchFilters);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Filters 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Object.keys(filterObj).map((filterType, i) => {
          return(
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {filterType}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filterObj[filterType].map(filter=>(
                <Dropdown.Item href="#/action-1"
                  onClick={()=>{
                    dispatch(setFilters({[filterType]:filter}))
                  }}
                >{filter}</Dropdown.Item>
              ))}
               
              </Dropdown.Menu>
            </Dropdown>

          )
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={()=> dispatch(removeFilters())}>Clear Filters</Button>
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

