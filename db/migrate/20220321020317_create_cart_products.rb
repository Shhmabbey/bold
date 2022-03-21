class CreateCartProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_products do |t|
      t.integer :quantity, null: false
      t.integer :product_id, null: false, index: true
      t.integer :cart_id, null: false, index: true
      
      t.timestamps
    end
  end
end
