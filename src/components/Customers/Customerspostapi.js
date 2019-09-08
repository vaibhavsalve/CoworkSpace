import { ButtonToolbar, Form, Label, FormGroup, Input, } from 'reactstrap'
import { Modal, Button } from 'react-bootstrap'
import FormInputs from '../FormInputs/FormInputs';
import React from 'react';
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`

export default class CustomerPostApi extends React.Component {
  state = {
    id: '',
    Name: '',
    Slug: '',
    email: '',
    contactNo: '',
    licenseExpriDate: '',
    modalShow: false
  }
  //
  // add customre api
  //
  submitFormAdd = (e) => {
    e.preventDefault()
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
          "email": `${this.state.email}`,
          "contact_no": `${this.state.contactNo}`,
          "license_expires_on": `${this.state.licenseExpriDate}`
        }
      })
    })
      .then(item => {
        console.log(item)
        const newitem = Object.keys(item).map(i => item[i])
        console.log(newitem)
        if(Array.isArray(newitem )) {
          this.props.addItemToState(newitem[1])
        } else {
          console.log('failure')
        }
      })
      .catch((error) => {
        console.error(error);
      });
    this.onHide()

  }

  submitFormEdit = (e) => {
    e.preventDefault()
    fetch(`${HEROKU_API_HOST}/api/v1/customers/${this.state.id} `, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        "customer": {
          "name": `${this.state.Name}`,
          "slug": `${this.state.Slug}`,
          "email": `${this.state.email}`,
          "contact_no": `${this.state.contactNo}`,
          "license_expires_on": `${this.state.licenseExpriDate}`
        }
      })
    }).then(item => {
      console.log('edit')
      console.log(item)
      const edititem = Object.keys(item).map(i => item[i])
      console.log(edititem)
      if(Array.isArray(edititem )) {
        this.props.undateState(edititem[1])
        
    
      } else {
        console.log('failure')
      }
    })
      .catch((error) => {
        console.error(error);
      });
      this.onHide()
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

  componentDidMount() {
    if (this.props.customervalue) {
      const { id, name, slug, email, contact_no, license_expires_on } = this.props.customervalue
      this.setState({
        Name: name,
        id: id,
       
        Slug: slug,
        email: email,
        contactNo: contact_no,
        licenseExpriDate: license_expires_on,

      })
    }
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
            <Form onSubmit={this.props.isEdit ? this.submitFormEdit : this.submitFormAdd}>
              <FormGroup >
                <Label for="first">Name</Label>
                <Input className='col-md-12' type="text" name='Name' id="first" onChange={this.handleClick} value={this.state.Name === null ? '' : this.state.Name} />
              </FormGroup>
              <FormGroup >
                <Label for="first">Slug</Label>
                <Input className='col-md-12' type="text" name="Slug" id="first" onChange={this.handleClick} value={this.state.Slug === null ? '' : this.state.Slug} />
              </FormGroup>
              <FormGroup >
                <Label for="first">Email</Label>
                <Input className='col-md-12' type="text" name="email" id="first" onChange={this.handleClick} value={this.state.email === null ? '' : this.state.email} />
              </FormGroup>
              <FormGroup >
                <Label for="first">contact No</Label>
                <Input className='col-md-12' type="text" name="contactNo" id="first" onChange={this.handleClick} value={this.state.contactNo === null ? '' : this.state.contactNo} />
              </FormGroup>
              <FormGroup >
                <Label for="first">License Expires On</Label>
                <Input className='col-md-12' type="date" name="licenseExpriDate" id="first" onChange={this.handleClick} value={this.licenseExpriDate === null ? '' : this.state.licenseExpriDate} />
              </FormGroup>

              {/* <FormInputs
                onChange={this.handleClick}
                ncols={["col-md-12", "col-md-12", "col-md-12", "col-md-12", "col-md-12"]}
                properties={[
                  {
                    label: "Name",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "Name",
                    defaultValue: `${this.props.isEdit?`${this.props.name}`:''}`,
                    name: 'Name'
                  },
                  {
                    label: "Slug",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "Slug",
                    defaultValue: `${this.props.isEdit?`${this.props.slug}`:''}`,
                    name: 'Slug',
                  },
                  {
                    label: "Email",
                    type: "email",
                    bsClass: "form-control",
                    placeholder: "Email",
                    name: 'email',
                    defaultValue: `${this.props.isEdit?`${this.props.email}`:''}`,
                  },
                  {
                    label: "Contact No",
                    type: "number",
                    bsClass: "form-control",
                    placeholder: " Contact No",
                    defaultValue: `${this.props.isEdit?`${this.props.contactNo}`:''}`,
                    name: 'contactNo'
                  },
                  {
                    label: " license_expires_on",
                    type: "date",
                    bsClass: "form-control",
                    placeholder: " license_expires_on",
                    defaultValue: `${this.props.isEdit?`${this.props.licenseExp}`:''}`,
                    name: 'licenseExpriDate'
                  }
                ]}
              /> */}
              {/* {this.props.isEdit ?
                <Button bsStyle="info" pullRight fill type="button" onClick={() => this.update(this.props.id)}>
                  Update Customer
                      </Button> :
                <Button bsStyle="info" pullRight fill type="button" onClick={() => this.submit()}>
                  Add Customer
                         </Button>

              } */}
              <Button bsStyle="info" pullRight fill type="submit" >
                submit
                    </Button>

            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle= 'secondary' onClick={this.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>

      </ButtonToolbar>
    );

  }
}

