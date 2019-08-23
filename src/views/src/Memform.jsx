
import React, { Component } from "react";
import  Steps  from './steps'
//import MultiStep from './index'
import MultiStep  from 'react-multistep'
import {
  Grid,
  Row,
  Col,
 
} from "react-bootstrap";

class MemberShip extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
         
          <Steps/>
    </Row>
        </Grid>
      </div>
    )
  }
}

export default MemberShip
  