class Api::ReviewsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.all
    render 'api/products/show'
  end

  def index
    @review = Review.find(params[:id])
    render 'api/products/show'
  end
  
  def create
    @review = Review.new(review_params)

    if @review.save
      render 'api/products/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review.update(review_params)
      render 'api/products/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
    render 'api/products/show'
  end

  private

  def review_params
    params.require(:review).permit(
      :title,
      :body,
      :rating,
      :reviewer_id,
      :product_id,
      :helpful
    )
  end

end
