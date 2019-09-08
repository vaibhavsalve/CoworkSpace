import React, { Component } from "react";
import { Grid, Row, Col, Table ,Tooltip, OverlayTrigger} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tablelist from '../components/ReactGridTable/Reactgridtable'
import { Redirect } from 'react-router-dom'
import RoomPostApi from '../components/RoomPostApi'

import Button from "../components/CustomButton/CustomButton.jsx";
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;
class TableList extends Component {
  state={
    Rooms:[],
    addButton:true,
    redirect: false,
    isEdit:false,
  }

  //Fetch api
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
  //remove api
  remove=(roomid)=>{
    fetch(`${HEROKU_API_HOST}/api/v1/rooms/${roomid}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      }
    })
     
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    const edit = <Tooltip id="edit_tooltip">Edit </Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
   
    const roomheader = ["ID", "Name", "Capacity",'Action'];
    
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            < RoomPostApi isEdit={false}/>
              <Card
                title="Rooms Details"
                addButton={this.state.addButton}
                buttonTitle="Add customer"
                buttonTitle="Add customer"
                ctTableFullWidth
                ctTableResponsive
                name="Add Room"
              
                content={
                  
                  <Table striped bordered hover >
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
                            <td bordered={false} >
                            <OverlayTrigger placement="top" overlay={edit}>
                                          < RoomPostApi isEdit={true} id ={prop.id} name={prop.name} capacity={prop.capacity}/>
                                {/* <Button bsStyle="info" simple type="button" bsSize="xs">
                                  <i className="fa fa-edit" />
                                </Button> */}
                              </OverlayTrigger>
                            
                                   </td>
                              <td bordered={false} >
                              <OverlayTrigger placement="top" overlay={remove}>
                              <Button bsStyle="info" onClick={()=>this.remove(prop.id)} simple type="button" bsSize="xs">
                              <i class="fa fa-times"></i>
                                </Button> 
                                </OverlayTrigger>
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
