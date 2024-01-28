class Api::ProductController < ApplicationController
  def index
    products = Product.all

    @products = products.map do |product|
      {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        color: product.color,
      }
    end
    render json: @products, status:200
  end
end