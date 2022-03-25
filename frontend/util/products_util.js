export const fetchAllProducts = category => {
  return $.ajax({
    method: "GET",
    url: "/api/products",
    data: { category: category }
  })
}

export const fetchProduct = id => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${id}`
  })
}
