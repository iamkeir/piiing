class User < ActiveRecord::Base
  has_many :pings
end
