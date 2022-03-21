class Api::CartProductsController < ApplicationController

  def index
    @cart_products = CartProduct.where(cart_id: params[:cart_id]).all
    render 'api/cart_items/index'
  end
  
  def show
    @cart_product = Product.find_by(id: params[:product_id])
    render `api/products/#{@cart_product}`
  end

  def create
    @cart_product = CartProduct.new(cart_products_params)

    if @cart_product.save
      render 'api/cart_products/show'
    else
      render json: @cart_product.errors.full_messages, status: 422
    end
  end

  def update
    @cart_product = CartProduct.find(params[:id])

    if @cart_product.update(cart_products_params)
      render 'api/cart_products/show'
    else
      render json: @cart_product.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_product = CartProduct.find(params[:id])
    @cart_product.destroy
    render json: ['Item was removed from cart.'], status: 200
  end

  private

  def cart_products_params
    params.require(:cart_product).permit(
      :cart_id,
      :product_id,
      :quantity
    )
  end

end
