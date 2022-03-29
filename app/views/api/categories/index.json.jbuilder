@categories.each do |category|
  json.set! category.id do
    json.partial! "api/categories/category", category: category
    json.sub_ctaegories category.sub_categories
  end
end