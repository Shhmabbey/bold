class Api::CartsController < ApplicationController

  def show
    if logged_in?
      @cart = current_user.cart
      render :show
    end
  end

  def create
    @cart = Cart.new(cart_params)

    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart = Cart.find_by(id: params[:id])
    render :show if @cart.cart_products.destroy_all
  end

  private

  def cart_params
    params.require(:cart).permit(:user_id)
  end

end
