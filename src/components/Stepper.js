import React, { Component } from 'react';
import { render } from 'react-dom';
import {Form,Label} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'
import { Modal } from 'react-bootstrap'
import Maps from '../views/Maps'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { green } from '@material-ui/core/colors';

const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com'
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;

export default class Steppe extends Component {
  constructor() {
    super()
    this.state = {
      membership: {
        type: '',
        start_date: '',
        desk_id: '',
        membership_plan_id: '',
       
        
      },
      organization_attributes: {
        name: "",
        contact_no: "",
        address: "",
        website: ""
      },
      primary_admin_attributes: {
        email: "",
        name: "",
        mobile: ""
      },
      name: 'React',
      customer_slug: "kickstart"
    }
    // handleClearForm=(e) =>{
    //   e.preventDefault();
    //   this.setState({
        
    //       membership: {
    //         type: '',
    //         start_date: '',
    //         desk_id: '',
    //         membership_plan_id: '',
           
            
    //       },
    //       organization_attributes: {
    //         name: "",
    //         contact_no: "",
    //         address: "",
    //         website: ""
    //       },
    //       primary_admin_attributes: {
    //         email: "",
    //         name: "",
    //         mobile: ""
    //       },
    //       name: 'React',
    //       customer_slug: "kickstart"
        
    //   });
    // }

    this.handletype = this.handletype.bind(this);
    this.handleMemberShipPlan = this.handleMemberShipPlan.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleOrgName = this.handleOrgName.bind(this);
    this.handleWebSide = this.handleWebSide.bind(this);
    this.handledDeskId = this.handledDeskId.bind(this);
    this.handleContactNo = this.handleContactNo.bind(this);
    this.handleInvoiceAddress = this.handleInvoiceAddress.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAdminNo = this.handleAdminNo.bind(this);
  }

  handletype(event) {
    this.setState({ membership: { ...this.state.membership, type: event.target.value } })
  }
  handleMemberShipPlan(event) {
    this.setState({ membership: { ...this.state.membership, membership_plan_id: event.target.value } })
  }
  handleStartDate(event) {
    this.setState({ membership: { ...this.state.membership, start_date: event.target.value } })
  }
  handledDeskId(event) {
    this.setState({ membership: { ...this.state.membership, desk_id: event.target.value } })

  }

  handleOrgName(event) {

    this.setState({organization_attributes: { ...this.state.organization_attributes,name:event.target.value}})

  }

  handleWebSide(event) {
    this.setState({ organization_attributes: { ...this.state.organization_attributes, website: event.target.value } })
  }
  handleContactNo(event) {
    this.setState({ organization_attributes: { ...this.state.organization_attributes, contact_no: event.target.value } })


  }
  handleInvoiceAddress(event) {
    this.setState({ organization_attributes: { ...this.state.organization_attributes, address: event.target.value } })

  }
  handleName(event) {
    this.setState({ primary_admin_attributes: { ...this.state.primary_admin_attributes, name: event.target.value } })


  }

  handleEmail(event) {
    this.setState({ primary_admin_attributes: { ...this.state.primary_admin_attributes, email: event.target.value } })


  }
  handleAdminNo(event) {
    this.setState({ primary_admin_attributes: { ...this.state.primary_admin_attributes, mobile: event.target.value } })

  }

  submit = (data) => {
    fetch(`${HEROKU_API_HOST}/api/v1/memberships`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        "membership": {
          "type": `${data.membership.type}` , 
          "start_date": `${data.membership.start_date}`, 
          "desk_id": `${data.membership.desk_id}`,
          "membership_plan_id": 1,
          "organization_attributes": { 
            "name": `${data.organization_attributes.name}`,
            "contact_no": `${data.organization_attributes.name}`,
            "address": `${data.organization_attributes.name}`,
            "website": `${data.organization_attributes.name}` },
          "primary_admin_attributes": { 
            "email": `${data.primary_admin_attributes.email}`,
            "name":`${data.primary_admin_attributes.name}`,
            "mobile": `${data.primary_admin_attributes.mobile}`}
                
          },
          "customer_slug": "kickstart"
      })
    })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true

    })
  }


  onSubmit(e) {
    e.preventDefault()
  }

  render() {
    console.log(this.state)
    return (
      <div >
     {/* < Maps/> */}
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header" style={{width:500 ,marginLeft:230,marginTop:20}}>
            <div className="step" data-target="#test-l-1" >
              <button className="step-trigger" style={{flexDirection:"column"}}>
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Step One</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2" >
              <button className="step-trigger" style={{flexDirection:"column"}}>
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Step Two</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger" style={{flexDirection:"column"}}>
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Step three</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content" style={{ marginTop: 20 }}>
            <Form onSubmit={this.onSubmit}>
              <div id="test-l-1" className="content"> 
            <div className='stepperWrapper'>
              <div className='.card__title ' style={{paddingBottom:30}}>
              <h4 className='.card__title '  > 
            Membership Details
            </h4>
            </div>
                <div className="form-group row" >
                  <label  className='col-sm-2'>Type</label>
                  <div className="col-sm-10">
                    <select className="form-control" id="type" onChange={this.handletype}
                      value={this.state.membership.type}>
                      <option>Group</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label  className='col-sm-2'>Membership Plan</label>
                  <div className="col-sm-10">
                    <select className="form-control" id="memberShipPlane"
                      type='number'
                      onChange={this.handleMemberShipPlan}
                      value={this.state.membership_plan_id}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label  className='col-sm-2'>Start Date</label>
                  <div className="col-sm-10">
                    <input type="date" className="form-control" id="datetime" placeholder="Select date"
                      onChange={this.handleStartDate}
                      value={this.state.membership.start_date}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label  className='col-sm-2'>Desk Id</label>
                  <div className="col-sm-10">
                    <input type="number"
                      className="form-control"
                      onChange={this.handledDeskId}
                      value={this.state.membership.desk_id}
                    />
                  </div>
                </div> 
                <div className="form-group row" style={{marginTop:40,padding:5}}>
                <div className="col-sm-12" >
             
             <button   className="btn btn-primary" onClick={()=>this.stepper.next()}>Next</button>
          </div>
          </div>
          
           </div>
         
             </div> 
              <div id="test-l-2" className="content">
              <div className='stepperWrapper'>
              <div className='.card__title ' style={{paddingBottom:30}}>
            <h4 >
            Organization Details
            </h4>
            </div>
                <div className="form-group row ">
                  <label  className='col-sm-2'> Name</label>
                  <div className="col-sm-10 ">
                    <input type="text" className="form-control" id="orgName" placeholder=" Name"
                      onChange={this.handleOrgName}
                      value={this.state.organization_attributes.name}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label  className='col-sm-2'>WebSide</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="webName" placeholder="WebSide"
                      onChange={this.handleWebSide}
                      value={this.state.organization_attributes.website}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label  className='col-sm-2'>contact No</label>
                  <div className="col-sm-10 ">

                    <input type="text" className="form-control" id="orgContact" placeholder="WebSide"
                      onChange={this.handleContactNo}
                      value={this.state.organization_attributes.contact_no}
                    />
                  </div>
                </div>
                <div className="form-group row">

                  <label  className='col-sm-2'>Invoicing Address</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="InvoicingAd" rows="3"
                      onChange={this.handleInvoiceAddress}
                      value={this.state.organization_attributes.address}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                <div className="col-sm-1 ">
                <button className="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                </div>
                <div className="col-sm-1">
                <button className="btn btn-primary" onClick={() => this.stepper.previous()}>Back</button>
                </div>
                </div>
                </div>
           
              </div>
              
              
              <div id="test-l-3" className="content ">
            
              <div className='stepperWrapper'>
              <div className='.card__title ' style={{paddingBottom:30}}>
              <h4 className='.card__title '  > 
           
            Admin Details
            </h4>
            </div>
                <div className="form-group row">
                  <label  className='col-sm-2'>Name</label>
                  <div className="col-sm-10 ">

                    <input type="text" className="form-control" id="personName" placeholder="Name"
                      onChange={this.handleName}
                      value={this.state.primary_admin_attributes.name}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label  className='col-sm-2'>Email</label>
                  <div className="col-sm-10 ">
                
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email"
                      onChange={this.handleEmail}
                      value={this.state.primary_admin_attributes.email}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label  className='col-sm-2'>Admin Contact No</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="AdminNo" placeholder="AdminNo"
                      onChange={this.handleAdminNo}
                      value={this.state.primary_admin_attributes.mobile}
                    />
                  </div>
                </div>
                <div className="row" style={{marginTop:95 }}>
                <div className="col-sm-1 ">
                <button className="btn btn-primary" onClick={() => this.stepper.previous()}>Back</button>
                </div>
                <div className="col-sm-1">
                <button className="btn btn-primary" onClick={()=>this.submit(this.state)}>Submit</button>
                </div>
                </div>

              </div>
     
              </div>
             
            </Form>
          </div>
        </div>
      </div>
    );
  }
}