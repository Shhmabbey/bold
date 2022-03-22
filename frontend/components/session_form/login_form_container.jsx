import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Login"
})

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  handleDemoLogin: () => dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
