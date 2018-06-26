class CreateChildren < ActiveRecord::Migration[5.0]
  def change
    create_table :children do |t|
      t.string :name
      t.string :sex
      t.references :father, foreign_key: true

      t.timestamps
    end
  end
end
