import { connect } from 'react-redux';
import Homepage from './homepage';

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  };
};

export default connect(
  mapStateToProps
)(Homepage);
