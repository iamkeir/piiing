class Ping < ActiveRecord::Base
  acts_as_mappable
  belongs_to :user
end
