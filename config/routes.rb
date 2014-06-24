Rails.application.routes.draw do

  root 'public#home'

  namespace :api do
    resources 'todos'
  end

end
