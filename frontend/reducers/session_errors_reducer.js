import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

const _nullSessionErrors = [];

export default (state = _nullSessionErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      if (action.errors) return action.errors;
      return _nullSessionErrors;
    case RECEIVE_CURRENT_USER:
      return _nullSessionErrors;
    case CLEAR_SESSION_ERRORS:
      return _nullSessionErrors;
    default:
      return state;
  }
};
