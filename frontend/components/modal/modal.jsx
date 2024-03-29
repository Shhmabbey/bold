import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ReviewForm from '../product/product_show/reviews/review_form';
import EditReviewFormContainer from '../product/product_show/reviews/edit_review_form_container';
import { Sendoff } from '../sendoff/sendoff';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal.modal ||= modal) {
    case 'Login':
      component = <LoginFormContainer />;
      break;
    case 'Signup':
      component = <SignupFormContainer />;
      break;
    case 'Review':
      component = <ReviewForm />;
      break;
    case 'Edit Review':
      component = <EditReviewFormContainer />
      break;
    case 'Sendoff':
      component = <Sendoff />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
