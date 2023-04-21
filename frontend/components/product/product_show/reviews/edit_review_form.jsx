import React from 'react';
import { withRouter } from 'react-router-dom';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.review.id,
      rating: this.props.review.rating,
      title: this.props.review.title,
      body: this.props.review.body,
      reviewer_id: this.props.currentUser.id,
      product_id: this.props.product.id,
      helpful: this.props.product.helpful
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.action(review).then(this.props.closeModal);
  }

  componentDidMount() {
    this.render()
  }

  componentWillUnmount() {
    this.props.clearReviewErrors();
  }

  renderErrors() {
    const { errors } = this.props
    return (
      <ul className="session-errors">
        {(errors.length === 0) ? (
          null
        ) : (
          errors.map((error, i) => (
            <li key={`error-${i}`} className="error">
              {error}
            </li>
          ))
        )}
      </ul>
    )
  }

  render() {
    const { formType, closeModal, product, deleteReview, review } = this.props;
    const create = (formType === "Review");
    return (
      <div className="Review_Form">
        <form onSubmit={this.handleSubmit} className="Review_Form_Box">
          <div role="button" tabIndex="0" className="Close_Button" onClick={() => closeModal()}>
            ×
          </div>
          <div className="Review_Form_Header">
            <div className="Review_Form_Header_Content">
              <h1>{create ? "Leave a Review" : "Edit Review"}</h1>
            </div>
          </div>
          <div className="Review_Form_Body">
            <div className="Review_Form_Image">
              {/* image */}
              <img src={product.photoUrls[0]} />
            </div>
            <div className="Review_Form_Body_Right">
              <div className="Review_Form_Body_Right_Context">
                <h3>{ product.title }</h3>
                <p>
                  Purchased on Mar 17, 2022
                </p>
              </div>
              <div className="quantity"> 
                <p>Rating: </p>
                <label htmlFor="rating"></label>
                <input
                  id="rating"
                  type="number"
                  min="1" max="5"
                  value={this.state.rating}
                  onChange={this.update("rating")}
                  className="Review_Form_Input"
                />
              </div>
            </div>
          </div>
          <div className="Review_Form_Body_Discription">
            <p>Title</p>
            <label htmlFor="title"></label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="Review_Form_Input"
              />
            <p>Comment</p>
            <label htmlFor="Body"></label>
              <textarea
                cols="30"
                rows="7"
                value={this.state.body}
                onChange={this.update("body")}
              className="Review_Form_Input"
              />
              { this.renderErrors() }
            <input
              id="Review_Submit"
              className="Review_Submit"
              type="submit"
              value="Submit Changes"/>
              <div className="Review_Button" id="submit_edit" onClick={() => deleteReview(review.id).then(this.props.closeModal)}>
                Delete
              </div>
          </div>
        </form>
      </div>
    );
 }
}

export default withRouter(EditReviewForm);
