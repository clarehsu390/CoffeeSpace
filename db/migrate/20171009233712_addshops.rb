class Addshops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :description, :text
  end
end
