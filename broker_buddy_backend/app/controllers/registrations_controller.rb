class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    def create
        user = User.new(email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation], first_name: params[:first_name], last_name: params[:last_name])

        if user.save
            render json: user.as_json(only: [:email, :authentication_token, :first_name, :last_name]), status: :created
        else
            head(:unauthorized)
        end
    end

    def destroy
    
    end
end