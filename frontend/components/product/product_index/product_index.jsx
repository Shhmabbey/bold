import React from 'react';
import ProductDetail from '../product_show/product_detail';

class ProductIndex extends React.Component {

  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    if (!this.props.products) return null;
    return (
      <div>
        <div className='product_index_container'>
          {this.props.products
            .map(product => {
              return <ProductDetail product={product} key={product.id} />
            })
          }
        </div>
      </div>
    )
  }
}

export default ProductIndex;
