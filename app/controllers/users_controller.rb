class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = user.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: user.erros.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        users = User.all
        render json: users
    end

    def show
        render json: @current_user
    end

    private
        def user_params
            params.permit(:username, :password)
        end
end
