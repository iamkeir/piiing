class PingsController < ApplicationController
  before_filter :require_login

  def index
  end

  private

  def require_login
    redirect_to '/' if !logged_in?
  end
end
