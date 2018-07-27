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
const CartInventory = require('./cartinventory')

// user
User.hasMany(Review)
User.hasOne(Cart)
User.hasMany(Order)

// product
Product.belongsToMany(Category, {through: 'CategoryProduct'})
Product.hasMany(Review)
Product.belongsTo(Manufacturer)
Product.belongsTo(Seller)
Product.belongsToMany(Cart, {through: 'CartProduct'})

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
Cart.belongsToMany(Product, {through: 'CartProduct'})
Cart.belongsToMany(CartInventory, {through: 'inventories'})

// cartinventory
CartInventory.belongsToMany(Cart, {through: 'inventories'})

// order
Order.belongsTo(User)
Order.hasMany(OrderHistory)

// orderhistory
OrderHistory.belongsTo(Order)

module.exports = {
  User,
  Product,
  Review,
  Category,
  Manufacturer,
  Seller,
  Cart,
  Order,
  OrderHistory,
  CartInventory
}
