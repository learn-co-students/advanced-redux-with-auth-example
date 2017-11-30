import React from 'react'
import { connect } from "react-redux";
import { getCurrentUser, getUsers } from "../actions/user";

class UserPage extends React.Component {


  componentDidMount() {
    this.props.getUsers()
  }

  usernames = () => {
    let names = []
    for(let key in this.props.usersReducer.users) {
      names.push(<li key={key}>{this.props.usersReducer.users[key].username}</li>)
    }
    return names
  }


  render() {
    return(
      <div className="wrapper">
        <div className="one">
          {(!this.props.usersReducer.users) ? "Downloading Internet.." : <div><ul>{this.usernames()}</ul></div>}
        </div>
        <div className="two">
          {}
        </div>
      </div>
    )
  }
}



const mapStateToProps = ({ usersReducer }) => ({
  usersReducer
});

export default (
  connect(mapStateToProps, {
    getCurrentUser,
    getUsers
  })(UserPage)
)
