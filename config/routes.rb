Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :carts, only: [:show, :index, :create]
    end
    resources :products, only: [:index, :show]
    resources :carts, only: [:show, :index] do 
      # resources :cart_products, only: [:index, :show, :create, :update, :destroy]
    end
  end

end
