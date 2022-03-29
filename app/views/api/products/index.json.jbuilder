@products.each do |product|
  json.set! product.id do
    json.partial! "api/products/product", product: product
    json.default_photo_url url_for(product.photos.first)
  end
end
