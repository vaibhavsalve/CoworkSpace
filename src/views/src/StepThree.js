'use strict'
import React from 'react'
import { Card } from "components/Card/Card.jsx";
import {
  Grid,
  Row,
  Col,
  Form
} from "react-bootstrap";

export default class StepThree extends React.Component {
 
  constructor () {
    super()
    this.state = { 
     Name:'',
     Email:'',
     AdminNo:''
    }
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAdminNo = this.handleAdminNo .bind(this);
   
  }
  handleName (event) {
    this.setState({Name: event.target.value})
  }

  handleEmail (event) {
    this.setState({Email: event.target.value})
  }
  handleAdminNo(event){
    this.setState({AdminNo: event.target.value})
  }
  

  

  render () {
    console.log(this.state)
    return (
      <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Contact Person details"
              content={
      <div>
     
     
<Form>
      <div class="form-group row">
          <label for="personName" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10 ">
              {/* <div class="input-group-prepend">
            
              <span class="input-group-text" ><i class="fas fa-user"></i></span>
            </div> */}
            <input type="text" class="form-control" id="personName" placeholder="Name"
             onChange={this.handleName}
             value={this.state.Name}
            />
          </div>
        </div>

      <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10 ">
              {/* <div class="input-group-prepend">
            
              <span class="input-group-text" ><i class="fas fa-envelope-square"></i></span>
            </div> */}
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email"
             onChange={this.handleEmail}
             value={this.state.Email}
            />
          </div>
        </div>
        <div class="form-group row">
            <label for="AdminNo" class="col-sm-2 col-form-label">Admin Contact No</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="AdminNo" placeholder="AdminNo"
               onChange={this.handleAdminNo}
               value={this.state.AdminNo}
              />
            </div>
          </div>
          </Form>    
  
      </div>
         }
         />
       </Col> 
     </Row>
   </Grid>
 </div>
    )
  }
}
