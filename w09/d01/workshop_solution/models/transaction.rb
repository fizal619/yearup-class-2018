class Transaction < ActiveRecord::Base
  has_one :car
  has_one :customer

end