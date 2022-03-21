class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :title, null: false, index: {unique: true}
      t.integer :category_id, null: false, index: true
    end
  end
end
