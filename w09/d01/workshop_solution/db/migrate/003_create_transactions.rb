class CreateTransactions < ActiveRecord::Migration[5.0]
  def up
    create_table :transactions do |t|
      t.integer :car_id
      t.integer :customer_id
    end
  end

  def down
    drop_table :transactions
  end
end
