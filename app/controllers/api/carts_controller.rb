class Api::CartsController < ApplicationController

  def show
    if logged_in?
      @cart = current_user.carts
      @products = current_user.items
      render "api/carts/show"
    else
      render 'api/carts/index'
    end 
  end

  def index 
    @cart = Cart.find(params[:id])
    render 'api/carts/index'
  end

  def create
    @cart = Cart.new(cart_params)

    if @cart.save
      render 'api/carts/show'
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  private

  def cart_params
    params.require(:cart).permit( :user_id )
  end

end
