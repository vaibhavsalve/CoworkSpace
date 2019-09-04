import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row } from "react-bootstrap";

function FieldGroup({ handleClick, value ,label, ...props }) {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}    />
    </FormGroup>
  );
  
}


export class FormInputs extends Component { 

   onChange=(e)=>{
    this.props.onChange(e)
  }
  

  render() {
    
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup {...this.props.properties[i]} onChange={this.onChange} />
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputs;
