class Child < ApplicationRecord
  belongs_to :father

  def father_name
    self.father.blank? ? " - " : self.father.name
  end
end
