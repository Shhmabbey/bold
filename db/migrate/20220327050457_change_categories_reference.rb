class ChangeCategoriesReference < ActiveRecord::Migration[5.2]
  def change
    change_table :categories do |t|
      t.remove :category_id
      t.references  :parent_category, foreign_key: { to_table: :categories }
    end
  end
end
