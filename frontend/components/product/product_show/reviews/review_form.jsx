import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      title: '',
      body: '',
      reviewer_id: this.props.currentUser.id,
      product_id: this.props.product.id,
      helpful: 0
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
    const { formType, closeModal, product } = this.props;
    const create = (formType === "Review");
    return (
      <div className="Review_Form">
        <form onSubmit={this.handleSubmit} className="Review_Form_Box">
          <div role="button" tabIndex="0" className="Close_Button">
            <img onClick={() => closeModal()} src="https://italic.com/static/icons/close.svg" height="10" width="10" className="Close" alt="close" />
          </div>
          <div className="Review_Form_Header">
            <div className="Review_Form_Header_Content">
              <h1>{create ? "Leave a Review" : "Edit Review"}</h1>
            </div>
          </div>
          <div className="Review_Form_Body">
            <div className="Review_Form_Image">
              <img src={product.photoUrls[0]} />
            </div>
            <div className="Review_Form_Body_Right">
              <div className="Review_Form_Body_Right_Context">
                <h3>{ product.title }</h3>
                <p>
                  Purchased on Mar 17, 2022
                </p>
              </div>
              {/* <div className="Review_Form_Body_Right_Rate"> */}
                <div className="quantity">
                  <p>Rating: </p>
                  <label htmlFor="rating"></label>
                  <input
                    id="rating"
                    type="number"
                    value={this.state.rating}
                    onChange={this.update("rating")}
                    className="Review_Form_Input"
                  />
                </div>
              {/* </div> */}
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
              {this.renderErrors()}
            <input
              className="Review_Submit"
              type="submit"
              value="Submit Review"/>
          </div>
        </form>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
