class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def enforce_login
    if !user_signed_in?
      redirect_to welcome_path
    end
  end

end
