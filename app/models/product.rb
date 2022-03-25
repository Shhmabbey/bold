class Product < ApplicationRecord
    
    validates :title, :description, :price, :stock, presence: true
    validates :title, uniqueness: true
    validates :stock, numericality: { greater_than_or_equal_to: 0 }
    
    belongs_to :category,
    foreign_key: :category_id,
    optional: true
    
    has_many :reviews
    
    has_many_attached :photos
     
end
