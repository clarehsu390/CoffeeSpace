class Users < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false, unique: true
      t.string :session_token, null: false
      t.string :image_url
  end
    add_index :users, :username
    add_index :users, :session_token
    end
end
