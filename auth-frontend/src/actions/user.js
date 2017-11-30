import * from './adapters'

export function signInUser(username, password) {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(loginError(response.json()));
        }
      })
      .then(userData => {
        dispatch(loginUser(userData));
      });
  };
}

export function loginError(json) {
  debugger;
}
export function signUpUser(username, password) {
  //use thunk here
  return dispatch => {
    fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(response => response.json())
      .then(userData => {
        dispatch(loginUser(userData));
      });
  };
}

export function loginUser(userData) {
  return {
    type: "LOGIN_USER",
    payload: userData
  };
}

export function loadingUser() {
  return {
    type: "LOADING_USER"
  };
}

export function getCurrentUser() {
  return dispatch => {
    dispatch(loadingUser());
    fetch("http://localhost:3000/api/v1/current_user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
      .then(response => response.json())
      .then(userData => dispatch(loginUser(userData)));
  };
}

export function logOutUser() {
  return {
    type: "LOG_OUT_USER"
  };
}
