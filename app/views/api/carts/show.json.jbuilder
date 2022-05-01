json.(@cart, :id, :user_id)

json.cart_products do
  @cart.cart_products.each do |cart_product|
    json.set! cart_product.id do
      json.(
        cart_product, 
        :id,
        :quantity,
        :product_id,
        :cart_id
      )
    end
  end
end