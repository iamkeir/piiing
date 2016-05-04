class CreatePingsTable < ActiveRecord::Migration
  def up
    create_table :pings do |t|
      t.float :lat
      t.float :lng
      t.belongs_to :user, index:true
    end
  end

  def down
    drop_table :pings
  end
end
