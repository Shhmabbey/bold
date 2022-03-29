import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Signup",
})

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signup(user)),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal('Login'))}>
  //     Log In
  //   </button>
  // ),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
