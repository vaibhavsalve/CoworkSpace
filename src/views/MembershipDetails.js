import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect } from 'react-router-dom'
//import Model from 'components/Model'
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;

export default class MembershipDetails extends Component {
  state={
  MembershipDetails:[],
    
  }
  componentDidMount() {
    fetch(`${HEROKU_API_HOST}/api/v1/memberships `, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
    })
    .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          MembershipDetails:responseJson
        })
        
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const tableHeader=['customer Id','desk Id','membershipPlan Id','Primaryadmin id','orgnazation Id' , 'start Date']
    
    return (
      <div className="content">
        <Grid fluid>  
            <Col md={12}>
              <Card
                title="Membership  details"
                ctTableFullWidth
                ctTableResponsive
                name="Add Room"
              
                content={
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        {tableHeader.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.MembershipDetails.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{prop.id}</td>
                            <td>{prop.desk_id}</td>
                            <td>{prop.membership_plan_id}</td>
                            <td>{prop.organization_id}</td>
                            <td>{prop.primary_admin_id}</td>
                            <td>{prop.start_date}</td>
                            
                          </tr>);
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

           
                
        
        </Grid>
      </div>
    );
  }
}


