import React, { Component } from "react"
import  StepOne  from './StepOne'
import  StepTwo  from './StepTwo'
import  StepThree  from './StepThree'
import MultiStep  from 'react-multistep'
import {
  Grid,
  Row,
  Col,
 
} from "react-bootstrap";




class MemberShip extends Component {
  

  render() {
    const Steps = 
    [
      {name: 'Membership details', component: <StepOne/>},
      {name: 'Organisation details', component: <StepTwo/>},
      {name: 'Contact Person details', component: <StepThree/>}
    ];
      
    return (
      <div className="content">
        <Grid fluid>
          <Row>
          <MultiStep showNavigation={true} steps={Steps}/>
        
    </Row>
        </Grid>
      </div>
    )
  }
}

export default MemberShip