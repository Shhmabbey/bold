class Product < ApplicationRecord
    
    validates :title, :description, :price, :stock, :category_id, presence: true
    validates :title, uniqueness: true
    validates :stock, numericality: { greater_than_or_equal_to: 0 }

    belongs_to :category

end
