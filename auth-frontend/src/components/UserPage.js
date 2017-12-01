import React from 'react'
import { connect } from "react-redux";
import { getCurrentUser, getUsers, updateUser } from "../actions/user";
import { Form, Input, TextArea, Button, Grid, Image, Container, List } from "semantic-ui-react";

class PostShow extends React.Component {

  state = {
    username: ""
  }

  componentDidMount() {
    this.props.getUsers()
  }

  handleChange = (e) => {
    this.setState({username: e.target.value})
  }
  // usernames = () => {
  //   let names = []
  //   for(let key in this.props.dataReducer.users) {
  //     names.push(<li key={key}>{this.props.dataReducer.users[key].username}</li>)
  //   }
  //   return names
  // }

  handleUpdate = () => {
    let userObj = { ...this.props.users[this.props.id], username: this.state.username }
    this.props.updateUser(userObj)
  }

  render() {
    console.log("userpage", this.props.dataReducer);
    return(
      <Container>

        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <List>
                {Object.keys(this.props.comments).map(com => (
                  <List.Item key={com}>
                    <List.Icon name='feed' />
                    <List.Content>{this.props.users[this.props.comments[com].user_id].username}</List.Content>
                    <List.Content>{this.props.comments[com].content}</List.Content>
                  </List.Item>
                ) )}
              </List>

            </Grid.Column>
            <Grid.Column width={4}>
              <Form>
                <Form.Field id='form-input-control-first-name' onChange={this.handleChange} control={Input} label='USERNAME' placeholder='USERNAME goes here...' />
                <Form.Field id='form-button-control-public' control={Button} onClick={this.handleUpdate} content='UPDATE MY NAME' />
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
  users: dataReducer.data.users,
  comments: dataReducer.data.comments,
  posts: dataReducer.data.posts,
  id: dataReducer.id
});

export default (
  connect(mapStateToProps, {
    getCurrentUser,
    getUsers,
    updateUser
  })(PostShow)
)
