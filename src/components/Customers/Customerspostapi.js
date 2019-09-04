import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import FormInputs from '../FormInputs/FormInputs';
import React from 'react';
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`

export default class CustomerPostApi extends React.Component {
  state = {
     Name: '',
    Slug: '',
    email: '',
    contactNo: '',
    licenseExpriDate:'',
    modalShow: false
  }

  submit = () => {
    fetch(`${HEROKU_API_HOST}/api/v1/customers `, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        "customer": {
          "name": `${this.state.Name}`,
          "slug": `${this.state.Slug}`,
          "email":`${this.state.email}`,
          "contact_no": `${this.state.contactNo}`,
          "license_expires_on": `${this.state.contactNo}`
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
          Add Customer
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
                ncols={["col-md-12", "col-md-12", "col-md-12", "col-md-12", "col-md-12"]}
                properties={[
                  {
                    label: "Name",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "Name",
                    defaultValue: "",
                    name: 'Name'
                  },
                  {
                    label: "Slug",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "Slug",
                    defaultValue: 'aaaa',
                    name: 'Slug',
                  },
                  {
                    label: "Email",
                    type: "email",
                    bsClass: "form-control",
                    placeholder: "Email",
                    name: 'email'
                  },
                  {
                    label: "Contact No",
                    type: "number",
                    bsClass: "form-control",
                    placeholder: " Contact No",
                    name: 'contactNo'
                  },
                  {
                    label: " license_expires_on",
                    type: "date",
                    bsClass: "form-control",
                    placeholder: " license_expires_on",
                    name: 'licenseExpriDate'
                  }
                ]}
              />
              <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.submit()}>
                Add Customer
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

