import React from 'react';
import ProductDetail from './product_detail';


class DisplayProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      price: "",
      stock: "",
      category_id: "",
      default_photo_url: ""
    }
  }
  
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }
  
  renderPhotos() {
    return (
      <div>
        <h2>Photos</h2>
        <p>TODO: render photos</p>
      </div>
    )
  }

  renderReviews() {
    return (
      <div>
        <h2>Reviews</h2>
        <p>TODO: render Reviews</p>
      </div>
    )
  }

  renderDetails() {
    return (
      <div>
        <h2>Product Details</h2>
        <p>TODO: render details</p>
      </div>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div>
        { this.renderPhotos() }
        { this.renderDetails() }
        <ProductDetail product={this.props} />
        { this.renderReviews() }
      </div>
    )
  }
}


export default DisplayProduct;
