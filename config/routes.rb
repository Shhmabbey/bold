Rails.application.routes.draw do
  
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :carts, only: [:show, :create, :destroy]
    end
    resources :products, only: [:index, :show]
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :categories, only: [:index, :show]
    resources :carts, only: [] do
      resources :cart_products, only: [:index, :show, :create, :update, :destroy]
    end
  end

end
