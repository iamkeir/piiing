Piiing::Application.routes.draw do
  root to: 'home#index'
  # get '/pings', to: 'ping#index'
  resources :pings
end
