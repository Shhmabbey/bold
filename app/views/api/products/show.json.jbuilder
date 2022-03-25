json.product do
  json.partial! "api/products/product", product: @product
  json.reviewIds @product.reviews.pluck(:id)
  json.photoUrls @product.photos.map { |file| url_for(file) }
end

json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end