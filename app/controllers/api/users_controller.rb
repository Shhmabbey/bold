class Api::UsersController < ApplicationController
  
  def create 
    @user = User.new(user_params)
    if @user.save
      @user.cart = Cart.create(user_id: @user.id)
      login(@user)
      render :show 
    else 
      render json: @user.errors.full_messages, status: 422
    end 
  end

  def show 
    @user = User.find_by(id: params[:id])
    if @user 
      render :show
    else 
      return nil
    end 
  end 

  private
  
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end 

end
