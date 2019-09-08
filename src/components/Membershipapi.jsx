import {ButtonToolbar,Form,Label,FormGroup,Input} from 'reactstrap'
import{Modal,Button} from 'react-bootstrap'
import FormInputs from './FormInputs/FormInputs'
import React, { useState } from 'react';
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`

export default class MembershipApi extends React.Component {
  state = {
   id:'',
   name:'',
    modalShow: false
  }
    //
  //Add deskt Api
  //
  submitFormAdd = (e) => {
    e.preventDefault()
    fetch(`${HEROKU_API_HOST}/api/v1/membership_plans `, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        'desk':{
          "name": `${this.state.name}`,
         
        }
         
      })
    })
      .then(response => response.json())
      .then(item => {
        const newitem = Object.keys(item).map(i => item[i])
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
  //
  //Edit desk api
  //
  submitFormEdit=(e)=>{
    e.preventDefault()
    fetch(`${HEROKU_API_HOST}/api/v1/desks/${this.state.id} `, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        'desk':{
          "name": `${this.state.name}`,
         
        }
         
      })
    }).then(response => response.json())
    .then(item => {
      console.log('edit')
      console.log(item)
      const edititem = Object.keys(item).map(i => item[i])
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
  };

  onHide = () => {
    { this.setState({ modalShow: !this.state.modalShow }) }
  };

  componentDidMount(){
    if(this.props.deskvalue){
      const { id,name } = this.props.deskvalue
      this.setState({ id, name })
    }
  }
  render() {
    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={this.setModalShow}>{
            this.props.isEdit ?`${this.props.buttonname}`:'Add Desk'
        }  
        </Button>
        <Modal
          show={this.state.modalShow}
          onHide={this.setModalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add ME
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.isEdit ? this.submitFormEdit : this.submitFormAdd} >
            <FormGroup >
          <Label  for="first">MemberShip Plane</Label>
          <Input className='col-md-12' type="text" name="name" id="first" onChange={this.handleClick} value={this.state.name === null ? '' : this.state.name} />
        </FormGroup>
              
              {/* <FormInputs
                onChange={this.handleClick}
                ncols={["col-md-12"]}
                properties={[
                  {
                    label: "Desk Name",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "Desk Name",
                    name: 'name',
                    
                    value:`${this.state.name === null ? '' : this.state.name}`
                  },
                 
               
                ]}
              /> */}
             <Button bsStyle="info" type='submit' >Submit</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>

      </ButtonToolbar>
    );

  }
}