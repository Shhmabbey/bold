class Api::CartProductsController < ApplicationController

  def index
    @cart_products = CartProduct.where(cart_id: params[:cart_id]).all
    render :index
  end
  
  def show
    @cart_product = CartProduct.find(params[:id])
    render :show
  end

  def create
    @cart_product = CartProduct.new(cart_product_params)

    if @cart_product.save
      render :show
    else
      render json: @cart_product.errors.full_messages, status: 422
    end
  end

  def update
    @cart_product = CartProduct.find(params[:id])

    if @cart_product.update(cart_product_params)
      render :show
    else
      render json: @cart_product.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_product = CartProduct.find(params[:id])
    @cart = Cart.find_by(id: @cart_product.cart_id)
    render "api/carts/show" if @cart_product.destroy
  end

  private

  def cart_product_params
    params.require(:cart_product).permit(
      :cart_id,
      :product_id,
      :quantity
    )
  end

end
