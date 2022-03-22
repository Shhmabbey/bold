import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Signup",
})

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
