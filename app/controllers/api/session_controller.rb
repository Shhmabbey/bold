class Api::SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:email][:password],
      params[:email][:password]
    )

    if @user
      login(@user)
      redirect_to root_url
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    logout if @user
    redirect_to root_url 
  end

end
