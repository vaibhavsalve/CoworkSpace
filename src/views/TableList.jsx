import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect } from 'react-router-dom'
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
    const rooms=null
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
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/admin/AddRooms' 
      to={{
        pathname: "/admin/AddRooms",
       // search: "?utm=your+face",
       
      }}
      
      />
    }
  }
  render() {
    console.log(this.state)
    const roomheader = ["ID", "Name", "Capacity",'Action'];
    console.log(this.state.Rooms)
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
            </Col>   */}
            <Col md={12}>
              <Card
                title="Rooms details"
                addButton={this.state.addButton}
                onClick={this.setRedirect}
               renderRedirect= {this.renderRedirect()}
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
                      {this.state.Rooms.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{prop.id}</td>
                            <td>{prop.name}</td>
                            <td>{prop.capacity}</td>
                            <td>{this.renderRedirect()}<td bordered={false}><FontAwesomeIcon onClick={this.setRedirect} icon="edit" /></td>
                            <td bordered={false} > <FontAwesomeIcon icon="trash" /></td>
                            </td>
                          </tr>);
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
