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

export default class Room_Booking extends Component {
  state={
    BookingDetails:[],
      
    }

  componentDidMount() {
    fetch(`${HEROKU_API_HOST}/api/v1/room_bookings/user_bookings?room_booking[user_id]=2`, {
      method: 'Get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },


    })

      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          BookingDetails:responseJson.bookings
        })
        
      })
      .catch((error) => {
        console.error(error);
      });
    //  alert('Not implemented')
  }
  render() {
    console.log(this.state)
    const roomheader = ["ID", "Room Name", "Booking Date"];

    return (
      <div className="content">
        <Grid fluid>
               
            <Col md={12}>
              <Card
                title="Booking details"
                
                ctTableFullWidth
                ctTableResponsive
                name="Add Room"
              
                content={
                  <Table striped bordered>
                    <thead>
                      <tr>
                        {roomheader.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.BookingDetails.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{prop.id}</td>
                            <td>{prop.room_id}</td>
                            <td>{prop.booking_date}</td>
                            
                            
                          
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


