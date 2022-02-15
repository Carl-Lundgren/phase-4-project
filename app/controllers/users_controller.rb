class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = user.create(user_params)
        render json: user
    end

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    private
        def user_params
            params.permit(:username, :password)
        end
end
