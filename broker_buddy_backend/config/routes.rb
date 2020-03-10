Rails.application.routes.draw do
  resources :stocks, only: [:index]
  resources :symbs, only: [:index]
  resources :watchlists, only: [:create, :destroy, :index]
  devise_for :users, :controllers => {:registrations => 'registrations'}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resource :sessions, only: [:create, :destroy]
end
