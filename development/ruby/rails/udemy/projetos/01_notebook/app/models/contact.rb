class Contact < ApplicationRecord
  belongs_to :kind
  has_one :address, dependent: :destroy
  has_many :phones, dependent: :destroy

  # nested_attributes
  accepts_nested_attributes_for :address, :update_only => true
  accepts_nested_attributes_for :phones, reject_if: :all_blank, allow_destroy: true, update_only: true

  # validações
  validates :name, presence: true, length: { minimum: 2 }
  validates :email, presence: true
end
