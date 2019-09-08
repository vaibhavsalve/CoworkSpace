
import Button from "components/CustomButton/CustomButton.jsx";
import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;
class TableList extends Component {
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/admin/invoice' />
    }
  }
  state={
     Users:[],
     redirect: false
      
  }
  componentDidMount(){
    fetch(`${HEROKU_API_HOST}/api/v1/users`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
       let responce=responseJson.users.map(user=>({id:user.id,email:user.email,emergencyContact:user.emergency_contact
       }))
       this.setState({Users:responce})  
      })
      .catch((error) => {
        console.error(error);
      });   
  }
  deleteItemFromState = (id) => {
    const updatedItems = this.state.Users.filter(item => item.id !== id)
    this.setState({ Users: updatedItems })
    
   
  }
  deleteItem=(id)=>{
    fetch(`${HEROKU_API_HOST}/api/v1/membership_plans/${id} `, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
    })
    .then(response => response.json())
      .then(res => {
        this. deleteItemFromState(id)
        
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const Usersheader = ["ID", "Email", "Contact no",'Action'];
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Users details"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table  striped bordered hover>
                    <thead>
                      <tr>
                        {Usersheader.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.Users.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{prop.id}</td>
                            <td>{prop.email}</td>
                            <td>{prop.emergencyContact}</td>
                            <td>
                              {this.renderRedirect()}
                              <td bordered={false} >
                              <Button bsStyle="info" onClick={this.setRedirect}  simple type="submit">
                              Genarate Invoice
                            </Button>
                            </td>
                            <td bordered={false} >
                                <Button bsStyle="info" onClick={()=>this.updateState(prop)} simple type="button" bsSize="xs">
                                  <i className="fa fa-edit" />
                                </Button>
                               
                                   </td>
                              <td bordered={false} >
                              <Button bsStyle="info" onClick={()=>this. deleteItem(prop.id)} simple type="button" bsSize="xs">
                              <i class="fa fa-times"></i>
                                </Button>
                              
                            </td>
                            </td>
                            
                          </tr>
                          
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            {/* <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }

              
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
