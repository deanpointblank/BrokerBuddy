class StocksController < ApplicationController
    def index
        stocks = Stock.all

        render json: stocks.as_json(only: [:id, :symb, :name])
    end

end
