class ResultsController < ApplicationController
  def index
    @count = params[:count].to_i
  end
end
