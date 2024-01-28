class ProductSerializers < ActiveModel::Serializers
    attributes :id, :name, :description, :image, :price, :color
end
  