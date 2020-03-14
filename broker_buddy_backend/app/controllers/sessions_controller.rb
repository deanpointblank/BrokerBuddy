class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])

        if user.save && user.valid_password?(params[:password])
            # current_user = user
            render json: user.as_json(only: [:email, :authentication_token, :first_name, :last_name]), status: :created
        else
            head(:unauthorized)
        end
    end

    def destroy
        current_user && current_user.authentication_token = nil
        if current_user.save
            head(:ok)
        else
            head(:unauthorized)
        end
    end

end