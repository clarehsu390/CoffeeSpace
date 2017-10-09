class CreateShops < ActiveRecord::Migration[5.0]
  def change
    create_table :shops do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :image_url, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end
  end
end
