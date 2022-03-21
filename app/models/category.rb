class Category < ApplicationRecord
    
  validates :title, presence: true, index: true
  validates :category_id, index: true

  belongs_to :category,
    foreign_key: :category_id

  has_many :categories,
    foreign_key: :category_id

  has_many :products

end
