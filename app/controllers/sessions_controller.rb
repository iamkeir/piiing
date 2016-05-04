class SessionsController < ApplicationController
  def create
    @user = User.find_or_create_by_uid(auth_hash.uid)
    @user.nickname = auth_hash.info.nickname
    @user.image = auth_hash.info.image
    @user.save

    login(@user)

    redirect_to '/pings'
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
