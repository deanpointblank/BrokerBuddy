class Stock < ApplicationRecord
    has_many :watchlist_stocks
    has_many :watchlists, through: :watchlist_stocks
end
