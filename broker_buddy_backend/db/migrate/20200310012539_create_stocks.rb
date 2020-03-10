class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :symb
      t.string :name

      t.timestamps
    end
  end
end
