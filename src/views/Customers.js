import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import Cust_Postapi from './Customer_postApi'
import { thArray, tdArray } from "variables/Variables.jsx";
import Customerpostapi from '../components/Customers/Customerspostapi'
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;


export default class customersDetails extends Component {
  state={
  customersDetails:[],
  addButton:true,
    
  }
  componentDidMount() {
    fetch(`${HEROKU_API_HOST}/api/v1/customers `, {
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
          customersDetails:responseJson.customers
        })
        
      })
      .catch((error) => {
        console.error(error);
      });
    
  }
  
  render() {
    const Customerheader = ["ID",'name', "Contact no","Email",];
    return (
      <div className="content">
        <Grid fluid>
        
            <Col md={12}>
            <Customerpostapi />
            
              <Card
                title="Customers details"
                buttonTitle="Add customer"
                ctTableFullWidth
                ctTableResponsive
                name="Add Room"
                content={
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        {Customerheader.map((prop, key) => {
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
                            <td>{prop.contact_no}</td>  
                            <td>{prop.email}</td>
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


