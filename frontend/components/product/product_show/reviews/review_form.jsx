import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   rating: "",
    //   title: '',
    //   body: '',
    //   reviewer_id: "",
    //   product_id: "",
    //   helpful: ""
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToProductShow = this.navigateToProductShow.bind(this);
  }

  navigateToProductShow() {
    const url = `/products/${this.props.match.params.productId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const productId = parseInt(this.props.match.params.productId);
    // const reviewerId = parseInt(this.props.match.params.userId);
    const review = Object.assign({}, this.state, {
      product_id: productId,
      // reviewer_id: reviewerId
    });
    this.props.createReview(review);
    this.navigateToProductShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>
          <label>Title</label>
          <br/>
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <br />

          <label>Comment</label>
          <br/>

          <textarea
            cols="30"
            rows="7"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input type="submit" />
        </form>
        <button onClick={this.navigateToProductShow}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
