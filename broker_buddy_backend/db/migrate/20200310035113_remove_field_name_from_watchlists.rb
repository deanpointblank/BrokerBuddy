class RemoveFieldNameFromWatchlists < ActiveRecord::Migration[6.0]
  def change

    remove_column :watchlists, :stocks, :text
  end
end
