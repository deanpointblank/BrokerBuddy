class WatchlistsController < ApplicationController

    def index
        watchlists = Watchlist.all

        render json: watchlists.as_json
    end


    def create
        watchlist = current_user.watchlist.build(name: params[:name])
    
        if watchlist.save
          render json: watchlist.as_json, status: :created
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
        watchlist = Watchlist.find(id: params[:id])
        watchlist.destroy
    
      end


end
