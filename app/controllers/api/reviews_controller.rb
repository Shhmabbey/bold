class Api::ReviewsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end
  
  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @product = Product.find_by(id: @review.product_id)
    render "api/products/show" if @review.destroy
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
