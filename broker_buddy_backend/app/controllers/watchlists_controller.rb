class WatchlistsController < ApplicationController
    before_action :authenticate_user!

    def index

        watchlists = current_user.watchlists.all


        render json: watchlists.as_json(include: :stocks)
    end


    def create
        watchlist = current_user.watchlists.build(name: params[:name])
        watchlists = current_user.watchlists.all
        if watchlist.save
          render json: watchlists.as_json, status: :created
        else
          head(:unauthorized)
        end
    
    end
    
    def update
      watchlist = Watchlist.find(id: params[:id])
      if !!watchlist && watchlist.update(stocks: params[:stocks])
  
        render json: watchlist.as_json
      else
        head(:unauthorized)
      end
    end
  
    def destroy
      watchlist = Watchlist.find(params[:id])
      watchlist.destroy

      watchlists = current_user.watchlists.all
      render json: watchlists.as_json, status: :ok
  
    end


end
