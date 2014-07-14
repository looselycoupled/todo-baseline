class PrivateController < ApplicationController

  before_action :enforce_login

  def home
  end
end
