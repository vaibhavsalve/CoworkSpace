'use strict'
import React from 'react'
import { Card } from "components/Card/Card.jsx";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Form
} from "react-bootstrap";

export default class StepOne extends React.Component {
 
  constructor () {
    super()
    this.state = { 
     
      type:'',
      startDate:'',
      endDate:'',
    }
   
     this.handletype = this.handletype.bind(this);
     this.handleMemberShipPlane = this.handleMemberShipPlane.bind(this);
     this.handleStartDate = this.handleStartDate.bind(this);
     this.handleEndDate = this.handleEndDate.bind(this);
  }

 
  handletype (event) {
    this.setState({type: event.target.value})
  }

  handleMemberShipPlane (event) {
    this.setState({membershipplane: event.target.value})
  }
  handleStartDate(event){
    this.setState({startDate: event.target.value})
  }
  handleEndDate(event){
    this.setState({endDate: event.target.value})
  }

  render () {
    console.log(this.state)
    return (
      <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
             title="Membership details"
              content={
      <Form>
 
            
      <div class="form-group row">
          <label for="type" class="col-sm-2 col-form-label">Type</label>  
          <div class="col-sm-10">
              <select class="form-control" id="type"   onChange={this.handletype}
              value={this.state.firstName}>
                  <option>Group</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
          </div>
        </div>
        <div class="form-group row">
            <label for="memberShipPlane" class="col-sm-2 col-form-label">Membership Plane</label>
        <div class="col-sm-10">
            
            <select class="form-control" id="memberShipPlane"
             onChange={this.handleMemberShipPlane}
                    value={this.state.membershipplane}
             >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
        </div>
          </div>

          <div class="form-group row">
              <label for="datetime" class="col-sm-2 col-form-label">Start Date</label>
              <div class="col-sm-10">
                <input type="date" class="form-control" id="datetime" placeholder="Select date" 
                 onChange={this.handleStartDate}
                 value={this.state.startDate}
                />
              </div>
            </div>

            <div class="form-group row">
                <label for="datetime" class="col-sm-2 col-form-label">End Date</label>
                <div class="col-sm-10">
                  <input type="date"
                   class="form-control" id="datetime" placeholder="Select date" 
                   onChange={this.handleEndDate}
                   value={this.state.endDate}
                   />
                </div>
              </div>
             
         
          

            </Form>
             }
             />
           </Col> 
         </Row>
       </Grid>
     </div> 
    )
  }
}
