export const selectProduct = ({ products, reviews }, id) => {
  if (products[id]) {
    const product = products[id];
    product.reviews = product.reviewIds.map(id => reviews[id]);
    return product;
  }
  return {};
};
export const asArray = ({ products }) => (
  Object.keys(products).map(key => products[key])
);
