Rails.application.routes.draw do
  namespace :api do
    get 'messages/random', to: 'messages#random_message'  # Update the route for messages
  end
  root 'root#index'
end