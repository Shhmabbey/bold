import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from '../product_show/product_detail';
import ProductIndexCard from './product_index_card';

class ProductIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllProducts()
  }

  render() {
    console.log(this.props.categoryId);
    const products = this.props.products.filter(product => product.category_id == this.props.categoryId);
    
    return (
      <div className="Products_Card_Map_container">
        <div className="Products_Card_Map">
          <div className="Products_Cards_Grid">
            {
              products?.map((product) => {
                return (
                  <div key={product.id} className="Product_Cards" >
                    <ProductIndexCard product={product} key={product.id} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      
    )
  }
}

export default ProductIndex;
