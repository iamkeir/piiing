Piiing::Application.routes.draw do
  root to: 'home#index'
  # get '/pings', to: 'ping#index'
  get 'pings/near', to: 'pings#near'
  resources :pings
  get '/auth/:provider/callback', to: 'sessions#create'
end
