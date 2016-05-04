class CreateUsersTable < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string :nickname
      t.string :image
      t.integer :uid
    end

    add_index :users, :uid, unique: true
  end

  def down
    drop_table :users
  end
end
