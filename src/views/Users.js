/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
  render() {
    const Usersheader = ["ID", "Email", "Contact no",'Action'];
    console.log(this.state)
   
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            {/* <Col md={12}>
              <Card
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
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
                            {this.state.Users.map((prop, key) => {
                              return <td key={key}>{prop.id}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>   */}
            <Col md={12}>
              <Card
                title="Users details"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
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
                              <Button bsStyle="info" onClick={this.setRedirect}  fill type="submit">
                              Genarate Invoice
                            </Button></td>
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
