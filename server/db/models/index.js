const User = require('./user')

//Product related inputs
const Product = require('./product')
const Review = require('./review')
const Category = require('./category')
const Manufacturer = require('./manufacturer')
const Seller = require('./seller')

// Cart related inputs
const Cart = require('./cart')
const Order = require('./order')
const OrderHistory = require('./orderhistory')

// user
User.hasMany(Review)
User.hasOne(Cart)
User.hasMany(Order)

// product
Product.belongsToMany(Category, {through: 'CategoryProduct'})
Product.hasMany(Review)
Product.belongsTo(Manufacturer)
Product.belongsTo(Seller)
Product.hasMany(Cart)
Product.hasMany(OrderHistory)

// category
Category.belongsToMany(Product, {through: 'CategoryProduct'})

// review
Review.belongsTo(User)
Review.belongsTo(Product)

// seller
Seller.hasMany(Product)

// manufacturer
Manufacturer.hasMany(Product)

// cart
Cart.belongsTo(User)
Cart.belongsTo(Product)

// order
Order.belongsTo(User)
Order.hasMany(OrderHistory)

// orderhistory
OrderHistory.belongsTo(Order)
OrderHistory.belongsTo(Product)

module.exports = {
  User,
  Product,
  Review,
  Category,
  Manufacturer,
  Seller,
  Cart,
  Order,
  OrderHistory
}
