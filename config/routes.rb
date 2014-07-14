Rails.application.routes.draw do

  devise_for :users

  root 'public#home'

  namespace :api do
    resources 'todos'
  end

end
