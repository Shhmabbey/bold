import { connect } from "react-redux";
import { editReview, clearReviewErrors, deleteReview } from "../../../../actions/review_actions";
import EditReviewForm from "./edit_review_form";
import { closeModal } from "../../../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    product: state.ui.modal.payload.product,
    review: state.ui.modal.payload.review,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.reviews,
    formType: "Edit Review"
  }
}

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(editReview(review)),
  closeModal: () => dispatch(closeModal()),
  clearReviewErrors: () => dispatch(clearReviewErrors()),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm);
