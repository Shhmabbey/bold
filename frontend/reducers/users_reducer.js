import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const nextState = Object.assign({}, state);
      nextState[action.currentUser.id] = action.user;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
