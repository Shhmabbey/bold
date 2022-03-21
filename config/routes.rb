Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :products, only: [:index, :show]
  end

end
