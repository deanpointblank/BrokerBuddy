Rails.application.routes.draw do
  resources :stocks, only: [:index]
  resources :watchlist_stocks, only: [:create, :destroy]
  post '/watchlist_stocks/delete' => 'watchlist_stocks#destroy'

  resources :watchlists, only: [:create, :destroy, :index]
  post '/watchlists/delete' => 'watchlists#destroy'

  post '/users/delete' => 'registrations#destroy'
  devise_for :users, :controllers => {:registrations => 'registrations'}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resource :sessions, only: [:create, :destroy]
  post '/sessions/logout' => 'sessions#destroy'

end
