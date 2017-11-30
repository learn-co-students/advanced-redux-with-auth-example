import { userNormalizr } from '../normalizr/normalizr'

export default function usersReducer(
  state = { username: null, loggedIn: false, loading: false, users: [] },
  action
) {
  switch (action.type) {
    //add in loading case and additional state
    case "LOADING_USER":
      return { ...state, loading: true };
    case "LOGIN_USER":
      localStorage.setItem("jwt", action.payload.jwt);
      return {
        ...state,
        username: action.payload.username,
        loggedIn: true,
        loading: false
      };
    case "LOG_OUT_USER":
      localStorage.removeItem("jwt");
      return { ...state, username: null, loggedIn: false };
    case "SET_USERS":
      let normalizedUsers = userNormalizr(action.payload)
      return {...state, users: normalizedUsers.entities.users }
    default:
      return state;
  }
}
