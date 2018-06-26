class Address < ApplicationRecord
  belongs_to :contact

  validates :street, presence: true, length: { minimum: 2 }
  validates :city, presence: true, length: { minimum: 2 }
  validates :state, presence: true, length: { maximum: 2 }
end
