import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Form
} from "react-bootstrap";

class MemberShipForm extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
  <Form>
  <fieldset >
           <legend   >Membership details</legend>    
      <div class="form-group row">
          <label for="type" class="col-sm-2 col-form-label">Type</label>  
          <div class="col-sm-10">
              <select class="form-control" id="type">
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
        <div class="col-lg-10">
            
            <select class="form-control" id="memberShipPlane">
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
                <input type="date" class="form-control" id="datetime" placeholder="Select date" />
              </div>
            </div>

            <div class="form-group row">
                <label for="datetime" class="col-sm-2 col-form-label">End Date</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" id="datetime" placeholder="Select date" />
                </div>
              </div>
            </fieldset>
    <fieldset >
          <legend  >Organization  details</legend>
          <div class="form-group row ">
              <label for="orgName" class="col-sm-2 col-form-label">Org Name</label>
              <div class="col-sm-10 input-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text" ><i class="fa fa-user icon"></i></span>
                    </div>
                <input type="text" class="form-control" id="orgName" placeholder="Org Name"/>
              </div>
            </div>
            <div class="form-group row">
                <label for="webName" class="col-sm-2 col-form-label">WebSide</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="webName" placeholder="WebSide"/>
                </div>
              </div>
              <div class="form-group row">
                  <label for="orgContact" class="col-sm-2 col-form-label">contact No</label>
                  <div class="col-sm-10 input-group">
                      <div class="input-group-prepend">
                          
                          <span class="input-group-text"  ><i class="fa fa-phone icon"></i></span>
                        </div>
                    <input type="text" class="form-control" id="orgContact" placeholder="WebSide"/>
                  </div>
                </div>

                <div class="form-group row">
                    <label for="InvoicingAd" class="col-sm-2 col-form-label">Invoicing Address</label>
                    <div class="col-sm-10">
                    <textarea class="form-control" id="InvoicingAd" rows="3"></textarea>
                  </div>
                  </div>
                  </fieldset>
    <fieldset >
        <legend >Contact Person details</legend>
      <div class="form-group row">
          <label for="personName" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10 input-group">
              <div class="input-group-prepend">
            
              <span class="input-group-text" ><i class="fas fa-user"></i></span>
            </div>
            <input type="text" class="form-control" id="personName" placeholder="Name"/>
          </div>
        </div>

      <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10 input-group">
              <div class="input-group-prepend">
            
              <span class="input-group-text" ><i class="fas fa-envelope-square"></i></span>
            </div>
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
          </div>
        </div>
        <div class="form-group row">
            <label for="AdminNo" class="col-sm-2 col-form-label">Admin Contact No</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="AdminNo" placeholder="AdminNo"/>
            </div>
          </div>
          <div class="form-group row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Sign in</button>
              </div>
            </div>
    </fieldset>
  </Form>
  </Row>
        </Grid>
      </div>
    );
  }
}

  export default MemberShipForm;