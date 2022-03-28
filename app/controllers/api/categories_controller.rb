class Api::CategoriesController < ApplicationController

  def index
    @category = nil
    # @categories = Category.find(:all, :conditions => {:parent_category_id => nil } )
    @categories = Category.all
    render 'api/categories/index'
    # render :index
  end

  def show
    # Find the category belonging to the given id
    @category = Category.find(params[:id])
    # Grab all sub-categories
    @categories = @category.parent_category
    # We want to reuse the index renderer:
    render :action => :index
    # render 'api/categories/show'
  end

end
