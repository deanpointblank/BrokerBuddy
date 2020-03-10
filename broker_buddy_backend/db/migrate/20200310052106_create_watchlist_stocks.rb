class CreateWatchlistStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :watchlist_stocks do |t|
      t.references :watchlist, null: false, foreign_key: true
      t.references :stock, null: false, foreign_key: true

      t.timestamps
    end
  end
end
