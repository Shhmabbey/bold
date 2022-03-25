class CartProduct < ApplicationRecord

has_one :product

belongs_to :cart

end
