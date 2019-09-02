import React, { Component } from "react";
import Model from '../components/Model'
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com'
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;


export default class Customer_post_api extends Component {
  state={
    customer:{
      name:'',
      slug:'',
      email:'',
      contactNo:'',
      licenseExpriOn:''
    }
  }
  componentDidMount=() => {
    fetch(`${HEROKU_API_HOST}/api/v1/customers `, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        "customer":  {"name": "Kickstart One", "slug": "kickstart-1", "email": "kickstartcoworking@gmail.com", "contact_no": "9876543234", "license_expires_on": "2019-12-31"}
      })
    })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="content">
            <Model/>
      </div>
          
    );
  }
}


