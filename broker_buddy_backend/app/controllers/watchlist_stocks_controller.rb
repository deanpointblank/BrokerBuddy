class WatchlistStocksController < ApplicationController
    before_action :authenticate_user!

    def create
        watchlist = Watchlist.find(params[:watchlistId])
        stock = Stock.find_by(symb: params[:stockSymb])
        add_to_list = WatchlistStock.create(stock_id: stock.id, watchlist_id: watchlist.id)

        if add_to_list.save
            watchlists = current_user.watchlists
            render json: watchlists.as_json(include: :stocks), status: :created
        else
            head(:unauthorized)
        end
    end

    def destroy
        binding.pry
        watchlistStock = WatchlistStock.find(params[:id])
        watchlistStock.destroy
  
        watchlists = current_user.watchlists.all
        render json: watchlists.as_json(include: :stocks), status: :ok
    end

end