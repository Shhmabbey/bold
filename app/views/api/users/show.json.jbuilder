json.partial! "api/users/user", user: @user

json.cart do
  json.(@user.cart, :id, :user_id)
end