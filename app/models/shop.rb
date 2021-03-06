class Shop < ApplicationRecord
    validates :name, :location, :image_url, :owner, :presence: true

    belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User
end
