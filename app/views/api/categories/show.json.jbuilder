json.category do
  json.partial! '/api/categories/category', category: @category
  json.sub_ctaegories @category.sub_categories
end

json.products do
  @category.products.each do |product|
    json.set! product.id do
      json.partial! 'api/products/product', product: product
    end
  end
end
