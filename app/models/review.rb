class Review < ApplicationRecord
  
    validates :reviewer_id, :product_id, :rating, :body, :title, presence: true
    validates :rating, numericality: { in: 1..5 }

    belongs_to :user,
    foreign_key: :reviewer_id
    
    belongs_to :product

end
