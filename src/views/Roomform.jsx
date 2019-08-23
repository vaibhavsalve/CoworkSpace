import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
 
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";



class AddRoom extends Component {

  
  

  render() {
    console.log(this.props)
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add Rooms"
                content={
                  <form>
                    <FormInputs
                  
                      ncols={["col-md-12", "col-md-12", ]}
                      properties={[
                       
                        {
                          label: "Room Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Room name",
                          defaultValue: ""
                        },
                        {
                          label: "Capacity",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Capacity"
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Add Room
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col> 
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AddRoom;
