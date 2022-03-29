import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from '../product_show/product_detail';

class ProductIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllProducts()
  }

  render() {
    const products = this.props.products;
    console.log("PRODUCTS", products)
    return (
      <div className="Products_Container">
          {
            products?.map((product) => {
              return (
                <div key={product.id} className="product-cards-grid" >
                  <Link to={`/products/${product.id}`} className="Product_Image" >
                    <img src={product.default_photo_url} alt="Product Default Image"/>
                  </Link>
                  <br/>
                  <div className='product_index_container'>
                    <ProductDetail product={product}/>
                  </div>
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default ProductIndex;
