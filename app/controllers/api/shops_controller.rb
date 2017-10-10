class Api::ShopsController < ApplicationController
    def create
        @shop = Shop.new(shop_params)
        if @shop.save
            render 'api/shops/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @shop = Shop.find(params[:id])
        render 'api/shops/show'
    end

    def index
        @shops = Shop.all
    end

    private

    def shop_params
        params.require(:shop).permit(:owner, :name, :image_url, :location)
    end
end
