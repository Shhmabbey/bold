class ChangeHelpfulInReviews < ActiveRecord::Migration[5.2]
  def change
    change_table :reviews do |t|
      t.remove :helpful
      t.integer :helpful, default: 0
    end
  end
end
