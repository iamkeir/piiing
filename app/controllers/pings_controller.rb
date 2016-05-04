class PingsController < ApplicationController
  before_filter :require_login

  def index
    @ping = Ping.new
  end

  def create
    ping = Ping.new
    ping.user = current_user
    ping.lat = params[:ping][:lat]
    ping.lng = params[:ping][:lng]
    ping.save

    render json: ping
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
