'use strict'
import React from 'react';
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

export default class StepTwo extends React.Component {
  
  
  constructor () {
    super()
    this.state = { 
     orgName:'',
     orgContact:'',
     WebSide:'',
     InvoiceAddre:''  
    }
   
     this.handleOrgName = this.handleOrgName.bind(this);
     this.handleWebSide = this.handleWebSide.bind(this);
     this.handleContactNo = this.handleContactNo.bind(this);
     this.handleInvoiceAddress = this.handleInvoiceAddress.bind(this);
     


  }
  handleOrgName (event) {
    this.setState({orgName: event.target.value})
  }

  handleWebSide (event) {
    this.setState({WebSide: event.target.value})
  }
  handleContactNo(event){
    this.setState({orgContact: event.target.value})
  }
  handleInvoiceAddress(event){
    this.setState({InvoiceAddre: event.target.value})
  }

  render () {
    console.log(this.state)
    return (
      <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Organization  details"
              content={
      <Form>
    
      
      
      <div class="form-group row ">
          <label for="orgName" class="col-sm-2 col-form-label">Org Name</label>
          <div class="col-sm-10 ">
              {/* <div class="input-group-prepend">
                
                  <span class="input-group-text" ><i class="fa fa-user icon"></i></span>
                </div> */}
            <input type="text" class="form-control" id="orgName" placeholder="Org Name"
              onChange={this.handleOrgName}
              value={this.state.OrgName}
            />
          </div>
        </div>

        <div class="form-group row">
            <label for="webName" class="col-sm-2 col-form-label">WebSide</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="webName" placeholder="WebSide"
               onChange={this.handleWebSide}
               value={this.state.WebSide}
              />
            </div>
          </div>
          <div class="form-group row">
              <label for="orgContact" class="col-sm-2 col-form-label">contact No</label>
              <div class="col-sm-10 ">
                  {/* <div class="input-group-prepend">
                      
                      <span class="input-group-text"  ><i class="fa fa-phone icon"></i></span>
                    </div> */}
                <input type="text" class="form-control" id="orgContact" placeholder="WebSide"
                  onChange={this.handleContactNo}
                  value={this.state.ContactNo}
                />
              </div>
            </div>
            <div class="form-group row">
                <label for="InvoicingAd" class="col-sm-2 col-form-label">Invoicing Address</label>
                <div class="col-sm-10">
                <textarea class="form-control" id="InvoicingAd" rows="3"
                  onChange={this.handleInvoiceAddress}
                  value={this.state.InvoiceAddre}
                ></textarea>
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
