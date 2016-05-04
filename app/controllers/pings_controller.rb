class PingsController < ApplicationController
  before_filter :require_login

  def index
  end

  def near
    location = current_user.pings.last
    @pings = Ping.within(5, origin: location).where("user_id != ?", current_user.id)
    render json: @pings
  end

  private

  def require_login
    redirect_to '/' if !logged_in?
  end
end
