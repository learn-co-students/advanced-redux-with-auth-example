import React from 'react'
import { connect } from "react-redux";
import { getCurrentUser, getUsers } from "../actions/user";
import { Form, Input, TextArea, Button, Grid, Image, Container } from "semantic-ui-react";

class PostShow extends React.Component {


  componentDidMount() {
    this.props.getUsers()
    this.props.getCurrentUser()
    this.props.getPost()
  }

  // usernames = () => {
  //   let names = []
  //   for(let key in this.props.dataReducer.users) {
  //     names.push(<li key={key}>{this.props.dataReducer.users[key].username}</li>)
  //   }
  //   return names
  // }


  render() {
    console.log("userpage", this.props.dataReducer);
    return(
      <Container>

        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <List>
                {this.props.dataReducer.data.comments.map(com => (
                  <List.Item>
                    <List.Icon name='browsers' />
                    <List.Content>{com.content}</List.Content>
                  </List.Item>
                ) )}
              </List>

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
    getCurrentUser,
    getUsers
  })(PostShow)
)
