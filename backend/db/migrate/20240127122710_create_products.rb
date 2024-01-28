class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.text :image, :limit => 3000
      t.string :name
      t.text :description, :limit => 3000
      t.float :price
      t.string :color

      t.timestamps
    end
  end
end
