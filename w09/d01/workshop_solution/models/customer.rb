class Customer < ActiveRecord::Base
  belongs_to :transaction
end