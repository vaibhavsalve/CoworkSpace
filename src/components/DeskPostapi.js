import {Modal,Button,ButtonToolbar} from 'react-bootstrap'
import FormInputs from './FormInputs/FormInputs'
import React, { useState } from 'react';
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`

export default class DeskPostApi extends React.Component {
  state = {
   desk:'',
    modalShow: false
  }
  submit = () => {
    fetch(`${HEROKU_API_HOST}/api/v1/desks `, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        'desk':{
          "name": `${this.state. desk}`,
         
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
    console.log(this.state)
    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={this.setModalShow}>
          Add Desk
        </Button>
        <Modal
          show={this.state.modalShow}
          onHide={this.setModalShow}

          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Desk
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormInputs
                onChange={this.handleClick}
                ncols={["col-md-12"]}
                properties={[
                  {
                    label: "Desk Name",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "Desk Name",
                    defaultValue: "",
                    name: 'desk'
                  },
               
                ]}
              />
              <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.submit()}>
                Add Desk
                    </Button>

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