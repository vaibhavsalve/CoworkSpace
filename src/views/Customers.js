import React, { Component } from "react";
import { Grid, Row, Col, Table,Tooltip, OverlayTrigger } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Customerpostapi from '../components/Customers/Customerspostapi'
import Button from "../components/CustomButton/CustomButton.jsx";
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
  remove=(id)=>{
    fetch(`${HEROKU_API_HOST}/api/v1/customers/${id}  `, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
    })
      .catch((error) => {
        console.error(error);
      });
      this.deleteItemFromState(id)
  }
  deleteItemFromState = (id) => {
    const updatedItems = this.state.customersDetails.filter(item => item.id !== id)
    this.setState({ customersDetails: updatedItems })
    
   
  }
  addItemToState = (item) => {
    console.log(item)
    this.setState(prevState => ({
      customersDetails: [...prevState.customersDetails, item]
    }))
  }

  updateState = (item) => {
    console.log('Edit method')
    const itemIndex = this.state.customersDetails.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.customersDetails.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.customersDetails.slice(itemIndex + 1)
    ]
    this.setState({ customersDetails: newArray })
  }
  
  render() {
    const Customerheader = ["ID",'name', "Contact no","Email", 'LicenceExp','Action'];
    const edit = <Tooltip id="edit_tooltip">Edit </Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    return (
      <div className="content">
        <Grid fluid>
        
            <Col md={12}>
            <Customerpostapi addItemToState={this.addItemToState}  />
            
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
                            <td>{prop.license_expires_on}</td>
                            <td class="td-actions text-right">
                            <td bordered={false} >
                            <OverlayTrigger placement="top" overlay={edit}>
                                   
                                {/* <Button bsStyle="info" simple type="button" bsSize="xs">
                                  <i className="fa fa-edit" />
                                </Button> */}
                                <Customerpostapi isEdit={true}  customervalue={prop}  updateState={this.updateState}/>
                              </OverlayTrigger>
                            
                                   </td>
                              <td bordered={false} >
                              <OverlayTrigger placement="top" overlay={remove}>
                              <Button bsStyle="info"  onClick={()=>this.remove(prop.id)} simple type="button" bsSize="xs">
                              <i class="fa fa-times"></i>
                                </Button> 
                                </OverlayTrigger>
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


