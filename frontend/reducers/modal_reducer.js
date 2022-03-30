import { 
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_REVIEW_MODAL
} from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {modal: action.modal};
    case OPEN_REVIEW_MODAL:
      return { modal: action.modal, payload: action.payload };
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
