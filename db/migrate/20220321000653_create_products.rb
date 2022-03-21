class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false, index: {unique: true}
      t.string :description, null: false
      t.string :size
      t.string :style
      t.decimal :price, null: false
      t.integer :stock, null: false

      t.integer :category_id, null: false, index: true

      t.timestamps
    end
  end
end
