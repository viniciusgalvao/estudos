class CreateFathers < ActiveRecord::Migration[5.0]
  def change
    create_table :fathers do |t|
      t.string :name
      t.string :cpf
      t.string :email
      t.references :occupation, foreign_key: true

      t.timestamps
    end
  end
end
