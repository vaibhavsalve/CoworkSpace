import React, { Component } from 'react';

import  {StepOne}  from './StepOne'
import  {StepTwo}  from './StepTwo'
import { StepThree} from './StepThree'

export class UserForm extends Component {
  state = {
    step: 1,
   
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <StepOne 
            nextStep={this.nextStep}
           
          />
        );
      case 2:
        return (
          <StepTwo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
         
        />
        );
      case 3:
        return (
          <StepThree
          nextStep={this.nextStep}
          prevStep={this.prevStep}
         
        />
        )
     
    }
  }
}

export default UserForm;
