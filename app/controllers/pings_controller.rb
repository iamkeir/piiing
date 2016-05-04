class PingsController < ApplicationController
  before_filter :require_login

  def index
  end

  def near
    @pings = Ping.all
    render json: @pings
  end

  private

  def require_login
    redirect_to '/' if !logged_in?
  end
end
