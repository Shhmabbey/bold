@cart_products.each do |cart_product|
  json.set! cart_product.id do
    json.partial! "api/cart_products/cart_product", cart_product: cart_product
  end
end