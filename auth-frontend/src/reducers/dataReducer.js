import { userNormalizr, postNormalizr } from '../normalizr'

export default function dataReducer(
  state = { user_id: null, username: null, loggedIn: false, loading: false, users: {}, comments: [], data: {users: [], comments: [], posts: []} },
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
        id: action.payload.id,
        username: action.payload.username,
        loggedIn: true,
        loading: false
      };
    case "LOG_OUT_USER":
      localStorage.removeItem("jwt");
      return { ...state, username: null, loggedIn: false };
    case "SET_DATA":
      let normalizedUsers = userNormalizr(action.payload)
      return { ...state, users: {...state.users, ...normalizedUsers.entities.users}, data: normalizedUsers.entities, posts: normalizedUsers.entities.posts, comments: normalizedUsers.entities.comments, results: normalizedUsers.result }
    case "UPDATE_USER":
      let newUsers = Object.keys(state.data.users).map(u => {
        if (state.data.users[u].id == action.payload.id) {
          state.data.users[u] = action.payload
          return state.data.users[u]
        }
        return state.data.users[u]
      })
      return { ...state, data: { ...state.data, users: newUsers } }
    default:
      return state;
  }
}
