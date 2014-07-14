Rails.application.routes.draw do

  # root route
  root 'private#home'

  # routes for user activities
  devise_for :users

  # public home page
  get 'welcome', to: 'public#welcome', as: 'welcome'


  # API related routes
  namespace :api do
    resources 'todos'
  end

end
