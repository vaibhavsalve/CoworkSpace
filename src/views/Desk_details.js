import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeskPostapi from '../components/DeskPostapi'
import Button from "../components/CustomButton/CustomButton.jsx"
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;
export default class MembershipDetails extends Component {
  state={
    desksDetails:[],
  }
  componentDidMount() {
    fetch(`${HEROKU_API_HOST}/api/v1/desks `, {
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
          desksDetails:responseJson.desks
        })
        
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const deskHeader=['id','name','Action']
    return (
      <div className="content">
        <Grid fluid> 
      
            <Col md={12}>
            < DeskPostapi/>
              <Card
                title="Desk details"
                ctTableFullWidth
                ctTableResponsive
                name="Add Room"
              
                content={
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        {deskHeader.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.desksDetails.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{prop.id}</td>
                            <td>{prop.name}</td>
                            {/* <td class="td-actions text-right">
                          
                            <td bordered={false} >
                            <i class="fa fa-edit info" ></i>
                               
                                </td>
                              <td bordered={false} >
                              <i class="fa fa-times"></i>    
                            </td>
                            </td> */}
                            <td class="td-actions text-right">
                             <td bordered={false} >
                                <Button bsStyle="info" simple type="button" bsSize="xs">
                                  <i className="fa fa-edit" />
                                </Button>
                              
                            
                                   </td>
                              <td bordered={false} >
                              <Button bsStyle="info" simple type="button" bsSize="xs">
                              <i class="fa fa-times"></i>
                                </Button>
                              
                            </td>
                            
                            </td>
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


