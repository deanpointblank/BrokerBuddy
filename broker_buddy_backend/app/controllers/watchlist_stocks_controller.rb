class WatchlistStocksController < ApplicationController
    # before_action :authenticate_user!

    def create
        binding.pry
        watchlist = Watchlist.find(params[:watchlistId])
        add_to_list = watchlist.build(stock: params[:stockID])

        if add_to_list.save
            watchlists = current_user.watchlists
            render json: watchlists.as_json(include: :stocks), status: :created
        else
            head(:unauthorized)
        end
    end

    def destroy
        watchlistStock = WatchlistStock.find(params[:id])
        watchlistStock.destroy
  
        watchlists = current_user.watchlists.all
        render json: watchlists.as_json(include: :stocks), status: :ok
    end
end