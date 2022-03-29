import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Login"
})

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user)),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal('Signup'))}>
  //     Signup
  //   </button>
  // ),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
