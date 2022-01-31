class UsersController < ApplicationController
    def create
        user = user.create(user_params)
        render json: user
    end

    private
        def user_params
            params.permit(:username, :password)
        end
end