import { connect } from 'react-redux';
import Homepage from './homepage';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllCategories } from '../../actions/category_actions';

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id],
    categories: Object.values(entities.categories),
  };
};


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
