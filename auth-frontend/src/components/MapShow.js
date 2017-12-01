import React from 'react'
import { connect } from "react-redux";
import { getCurrentUser, getUsers } from "../actions/user";
import { Form, Input, TextArea, Button, Grid, Image, Container } from "semantic-ui-react";

class MapShow extends React.Component {


  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    console.log("MAP SHOW", this.props.dataReducer);
    return(
      <Container>

        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              {/*POST GOES HERE*/}
            </Grid.Column>
            <Grid.Column width={12}>
              <Form>
                <Form.Field id='form-input-control-first-name' control={Input} label='USERNAME' placeholder='USERNAME goes here...' />
                <Form.Field id='form-button-control-public' control={Button} content='UPDATE MY NAME' />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <div>

        </div>

      </Container>
    )
  }
}


const mapStateToProps = ({ dataReducer }) => ({
  dataReducer
});

export default (
  connect(mapStateToProps, {
    getUsers
  })(MapShow)
)
