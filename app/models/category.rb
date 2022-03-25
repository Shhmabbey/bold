class Category < ApplicationRecord
    
  validates :title, presence: true

  belongs_to :category,
    foreign_key: :category_id,
    optional: true

  has_many :categories,
    foreign_key: :category_id,
    optional: true

  has_many :products

end
