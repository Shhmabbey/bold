class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.boolean :helpful, default: false
      t.integer :reviewer_id, null: false
      t.integer :product_id, null: false

      t.timestamps
    end

    add_index :reviews, [:reviewer_id, :product_id]
  end
end
