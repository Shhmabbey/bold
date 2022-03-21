class ApplicationController < ActionController::Base

  attr_reader :current_user

  helper_method :current_user, :logged_in?, :require_logged_in

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token]) 
  end
  
  def require_logged_in
    redirect_to root_url unless is_logged_in?
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    @current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!@current_user
  end

end
