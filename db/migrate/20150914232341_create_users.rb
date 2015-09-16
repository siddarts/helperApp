class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :school
      t.string :cell
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
