import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const nextState = Object.assign({}, state);
      nextState[action.user.id] = action.user;
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
};

export default usersReducer;
