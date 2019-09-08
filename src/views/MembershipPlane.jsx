import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Button } from 'react-bootstrap'
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect } from 'react-router-dom'
import MemberShipPlanApi from '../components/MemberShipPlanApi'
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;
export default class MembershipPlane extends Component {
  state = {
    MembershipPlane: [],

  }

  componentDidMount() {
    fetch(`${HEROKU_API_HOST}/api/v1/membership_plans `, {
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
          MembershipPlane: responseJson.membership_plans
        })

      })
      .catch((error) => {
        console.error(error);
      });
  }

  addItemToState = (item) => {
    console.log(item)
    this.setState(prevState => ({
      MembershipPlane: [...prevState.MembershipPlane, item]
    }))
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.MembershipPlane.filter(item => item.id !== id)
    this.setState({ MembershipPlane: updatedItems })
  }

  deleteItem = (id) => {
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
        this.deleteItemFromState(id)

      })
      .catch((error) => {
        console.error(error);
      });
  }
  updateState = (item) => {
    console.log('Edit method')
    const itemIndex = this.state.MembershipPlane.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.MembershipPlane.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.MembershipPlane.slice(itemIndex + 1)
    ]
    this.setState({ MembershipPlane: newArray })
  }

  render() {
    console.log(this.state)
    const tableHeader = ['Membershipplane', 'Type', 'Action']
    return (
      <div className="content">
        <Grid fluid>
          <Col md={12}>
          < MemberShipPlanApi addItemToState={this.addItemToState}/>
            <Card
              title="Membership Plan details"
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
                    {this.state.MembershipPlane.map((prop, key) => {
                      return (
                        <tr key={key}>
                          <td>{prop.id}</td>
                          <td>{prop.name}</td>
                          <td>
                            <td bordered={false} >
                              < MemberShipPlanApi  undateState={this.updateState} MemberShipPlanDetails={prop} isEdit={true}  buttonname='Edit'/>   
                            </td>
                            <td bordered={false} >
                              <Button bsStyle="info" onClick={() => this.deleteItem(prop.id)} simple type="button" bsSize="xs">
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


