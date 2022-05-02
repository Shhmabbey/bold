import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';
import { useLocation } from 'react-router';
import ProductIndexCard from '../product/product_index/product_index_card';

const SearchResults = () => {
  const products = useSelector(state => state.entities.products);
  
  let dispatch = useDispatch();
  let location = useLocation();
  const searchString = location.pathname.split('/')[2];

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  let results = [];
  let productArray = Object.values(products);
  if (productArray.length > 0) {
    productArray.forEach( (product) => {
      let title = product.title.toLowerCase();
      let description = product.description.toLowerCase();
      let searchValue = searchString.toLowerCase();

      if (title.includes(searchValue) || description.includes(searchValue)) {
        results.push(product.id)
      }
    })
  }

   if (results.length > 0) {
     return (
        <div className="Products_Card_Map_container">
          <div className="Products_Card_Map">
            <div className="Products_Cards_Grid">
              {
                results.map((productId) => {
                  return (
                    <div key={productId} className="Product_Cards" >
                      <ProductIndexCard product={products[productId]} key={productId} />
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
     )
   } else {
    return null
   }
}

export default SearchResults;