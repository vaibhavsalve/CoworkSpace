import React, { Component } from 'react';

export default class Textbox extends Component{

  render(){
    return(
      <div>
        <textarea rows="4" name="note" cols="50" onChange={this.props.handleChangeTextArea}>  
          </textarea>
      </div>
      )
  
  }
  
}