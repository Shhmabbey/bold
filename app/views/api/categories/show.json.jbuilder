json.category do
  json.partial! '/api/categories/category', category: @category
  # json.subCategoryIds @category.sub_categories.pluck(:id)
end
