json.array! @products do |product|
  json.partial! "api/products/product", product: product
  json.default_photo_url url_for(product.photos.first)
end
