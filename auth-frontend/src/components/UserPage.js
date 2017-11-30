import React from 'react'
import { connect } from "react-redux";
import { getCurrentUser, getUsers } from "../actions/user";

class UserPage extends React.Component {


  componentDidMount() {
    this.props.getUsers()
  }


  render() {
    console.log(this.props);
    return(
      <div>
        {this.props.usersReducer.loading
          ? "Downloading Internet.."
          : this.props.usersReducer.username}
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
