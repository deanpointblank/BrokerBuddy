class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    def create
        user = User.new(email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

        if user.save
            render json: user.as_json(only: [:email, :authentication_token]), status: :created
        else
            head(:unauthorized)
        end
    end

    def destroy
    
    end
end