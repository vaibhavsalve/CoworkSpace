import {ButtonToolbar,Form,Label,FormGroup,Input} from 'reactstrap'
import{Modal,Button} from 'react-bootstrap'
import FormInputs from './FormInputs/FormInputs'
import React, { useState } from 'react';
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`

export default class MembershipPlan extends React.Component {
  state = {
   id:'',
   name:'',
    modalShow: false
  }
    //
  //Add MemberShipPlan Api
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
        'membership_plan':{
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
    fetch(`${HEROKU_API_HOST}/api/v1/membership_plans/${this.state.id} `, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        'membership_plan':{
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
    if(this.props.MemberShipPlanDetails){
      const { id,name } = this.props.MemberShipPlanDetails
      this.setState({ id, name })
    }
  } 
  render() {
    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={this.setModalShow}>{
            this.props.isEdit ?`${this.props.buttonname}`:'Add MembershipPlane  '
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
              Add MembershipPlan
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.isEdit ? this.submitFormEdit : this.submitFormAdd} >
            <FormGroup >
          <Label  for="first">MemberShip Plane</Label>
          <Input className='col-md-12' type="text" name="name" id="first" onChange={this.handleClick} value={this.state.name === null ? '' : this.state.name} />
        </FormGroup>
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