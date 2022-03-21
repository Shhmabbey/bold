Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
  end


end
