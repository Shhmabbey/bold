class ChangeCategoriesTitleUniqueFalse < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :title, :string
    add_column :categories, :title, :string
  end
end
