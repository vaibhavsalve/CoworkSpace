import {Modal,Button,ButtonToolbar} from 'react-bootstrap'
import FormInputs from './FormInputs/FormInputs'
import React, { useState } from 'react';
 export default  () =>{
  const MyVerticallyCenteredModal=(props) =>{
    return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Room
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <form>
                    <FormInputs
                  
                      ncols={["col-md-12", "col-md-12", ]}
                      properties={[
                       
                        {
                          label: "Room Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Room name",
                          defaultValue: ""
                        },
                        {
                          label: "Capacity",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Capacity"
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Add Room
                    </Button>
                    
                  </form>
               
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
         Add room
      </Button>
      

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

