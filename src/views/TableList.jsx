import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tablelist from '../components/ReactGridTable/Reactgridtable'
import { Redirect } from 'react-router-dom'
import Model from '../components/Model'
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Button from "../components/CustomButton/CustomButton.jsx";
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;
class TableList extends Component {
  
  state={
    Rooms:[],
    addButton:true,
    redirect: false
  }

  componentDidMount(){
    
    fetch(`${HEROKU_API_HOST}/api/v1/rooms`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({ 
         Rooms:responseJson.rooms   
        })
        
      })
      .catch((error) => {
        console.error(error);
      });   
  }
  
 
 
  render() {
   
    const roomheader = ["ID", "Name", "Capacity",'Action'];
    
    return (
      <div className="content">
        <Grid fluid>
          <Row>
          < Tablelist data={this.state.Rooms}/>
            <Col md={12}>
              <Card
                title="Rooms Details"
                addButton={this.state.addButton}
                buttonTitle="Add customer"
                buttonTitle="Add customer"
                ctTableFullWidth
                ctTableResponsive
                name="Add Room"
              
                content={
                  
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        {roomheader.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.Rooms.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{prop.id}</td>
                            <td>{prop.name}</td>
                            <td>{prop.capacity}</td>
                            <td class="td-actions text-right">
                            {/* <td class="td-actions text-right">
                              <button type="button" class="btn-simple btn btn-xs btn-info">
                                <i class="fa fa-edit"></i>
                              </button>
                            <button type="button" class="btn-simple btn btn-xs btn-danger">
                              <i class="fa fa-times"></i></button>
                            </td> */}
                            <td bordered={false} >
                            
                                <Button bsStyle="info" simple type="button" bsSize="xs">
                                  <i className="fa fa-edit" />
                                </Button>
                              
                            
                                   </td>
                              <td bordered={false} >
                              <Button bsStyle="info" simple type="button" bsSize="xs">
                              <i class="fa fa-times"></i>
                                </Button>
                              {/* <i class="fa fa-times"></i> */}
                                 {/* <FontAwesomeIcon icon="trash" /> */}
                            </td>
                            
                            </td>
                           
                          </tr>);
                      })}
                    </tbody>
                  </Table >
                }
              />
            </Col>   
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
