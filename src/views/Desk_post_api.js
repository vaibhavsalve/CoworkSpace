import React, { Component } from "react";
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com'
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;
export default class Desk_post_api extends Component {

  componentDidMount=() => {
    fetch(`${HEROKU_API_HOST}/api/v1/desks`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      body: JSON.stringify({
        "desk": {
          "name": "desk 2"
        }   
      })
    })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="content">
   
      </div>
          
    );
  }
}


