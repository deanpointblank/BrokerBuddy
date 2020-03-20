Rails.application.routes.draw do
  resources :stocks, only: [:index]
  resources :watchlist_stocks, only: [:create, :destroy]
  post '/watchlist_stocks/delete' => 'watchlist_stocks#destroy'

  resources :watchlists, only: [:create, :destroy, :index]
  post '/watchlists/delete' => 'watchlists#destroy'

  
  devise_scope :user do
    post '/users/delete' => 'registrations#delete'
  end
  devise_for :users, :controllers => {:registrations => 'registrations'}
  
  #devise_for :users, :path => '', :path_names => { :sign_in => "login", :sign_out => "logout", :sign_up => "register" }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resource :sessions, only: [:create, :destroy]
  post '/sessions/logout' => 'sessions#destroy'

end
