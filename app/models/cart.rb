class Cart < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user

  has_many :cart_products

end
