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
  customersDetails:'',
    
  }
  componentDidMount() {
    fetch(`${HEROKU_API_HOST}/api/v1/memberships `, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
    })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    console.log(this.state)
    const roomheader = ["ID", "Name", "Capacity",'Action'];
    console.log(this.state.Rooms)
    return (
      <div className="content">
        {/* <Grid fluid>
               
            <Col md={12}>
              <Card
                title="customers details"
                
                ctTableFullWidth
                ctTableResponsive
                name="Add Room"
              
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {roomheader.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.customersDetails.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{prop.id}</td>
                            <td>{prop.name}</td>
                            <td>{prop.capacity}</td>
                            <td class="td-actions text-right">
                          
                            <td bordered={false} >
                            <i class="fa fa-edit info" ></i>
                               
                                </td>
                              <td bordered={false} >
                              <i class="fa fa-times"></i>    
                            </td>
                            </td>
                          </tr>);
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

           
                
        
        </Grid> */}
      </div>
    );
  }
}


