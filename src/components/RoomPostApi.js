import {Modal,Button,ButtonToolbar} from 'react-bootstrap'
import FormInputs from './FormInputs/FormInputs'
import React, { useState } from 'react';
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`

export default class RoomPostApi extends React.Component {
  state = {
    roomName: '',
    Capacity:'',
    modalShow: false,
    
  }
  submit = () => {
    fetch(`${HEROKU_API_HOST}/api/v1/rooms `, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        'room':{
          "name": `${this.state. roomName}`,
          "capacity": `${this.state.Capacity}`
        }
         
      })
    })
      .catch((error) => {
        console.error(error);
      });
  }
  update=(id)=>{
    fetch(`${HEROKU_API_HOST}/api/v1/rooms/${id} `, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        'room':{
          "name": `${this.state. roomName}`,
          "capacity": `${this.state.Capacity}`
        }
         
      })
    })
      .catch((error) => {
        console.error(error);
      });

  }

  handleClick = (evt) => {
   
    this.setState({ [evt.target.name]: evt.target.value });
  };
  setModalShow = () => {
    { this.setState({ modalShow: !this.state.modalShow }) }
  }
  onHide = () => {
    { this.setState({ modalShow: !this.state.modalShow }) }
  }

  render() {
    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={this.setModalShow}>
          Add Room
        </Button>
        <Modal
          show={this.state.modalShow}
          onHide={this.setModalShow}

          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Customer
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
                   <FormInputs
                   onChange={this.handleClick}
                   ncols={["col-md-12", "col-md-12"]}
                   properties={[
                     {
                       label: "Room Name",
                       type: "text",
                       bsClass: "form-control",
                       placeholder: "Name",
                       defaultValue: `${this.props.isEdit?`${this.props.name}`:''}`,
                       name: 'roomName'
                     },
                     {
                       label: "Capacity",
                       type: "number",
                       bsClass: "form-control",
                       placeholder: "Capacity",
                       name: 'Capacity',
                       defaultValue: `${this.props.isEdit?`${this.props.capacity}`:''}`,
                     }
                   ]}
                 />
                 { this.props.isEdit?
                  <Button bsStyle="info" pullRight fill type="button" onClick={() => this.update(this.props.id)}>
                  Update Room
                      </Button>:
                     <Button bsStyle="info" pullRight fill type="button" onClick={() => this.submit()}>
                     Add Room
                         </Button>
                        
                 }
                 

            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>

      </ButtonToolbar>
    );

  }
}
















































                       

  

