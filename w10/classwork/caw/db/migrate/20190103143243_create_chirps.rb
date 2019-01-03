class CreateChirps < ActiveRecord::Migration[5.2]
  def change
    create_table :chirps do |t|
      t.string :body
      t.string :image
      t.timestamps
    end
  end
end
