import React from 'react'
import { connect } from "react-redux";
import { getCurrentUser, getUsers } from "./actions/user";

const UserPage = () => {
  return(
    <div>
      User Page
    </div>
  )
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
