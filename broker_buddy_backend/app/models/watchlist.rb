class Watchlist < ApplicationRecord
  belongs_to :user
  has_many :watchlist_stocks, dependent: :destroy 
  has_many :stocks, through: :watchlist_stocks

end
