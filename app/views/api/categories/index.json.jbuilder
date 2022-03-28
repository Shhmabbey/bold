json.array! @categories do |category|
  # if !category.parent_category_id.beteen?(1, 5)
    json.partial! "api/categories/category", category: category
  # end
end