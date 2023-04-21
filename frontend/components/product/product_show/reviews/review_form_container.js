// import { connect } from "react-redux";
// import { createReview, clearReviewErrors } from "../../../../actions/review_actions";
// import ReviewForm from "./review_form";
// import { closeModal } from "../../../../actions/modal_actions";

// const mapStateToProps = state => {
//   return {
//     product: state.ui.modal.payload,
//     currentUser: state.entities.users[state.session.id],
//     errors: state.errors.reviews,
//     formType: "Review"
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   action: review => dispatch(createReview(review)),
//   closeModal: () => dispatch(closeModal()),
//   clearReviewErrors: () => dispatch(clearReviewErrors())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ReviewForm);
