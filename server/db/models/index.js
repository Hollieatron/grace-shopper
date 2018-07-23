const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Category = require('./category')
const Manufacturer = require('./manufacturer')
const Seller = require('./seller')

// user
User.hasMany(Review)

// product
Product.belongsToMany(Category, {through: 'ProductCategory'})
Product.belongsTo(Review)
Product.hasOne(Manufacturer)
Product.hasOne(Seller)

// category
Category.belongsToMany(Product, {through: 'CategoryProduct'})

// review
Review.belongsTo(User)
Review.hasOne(Product)

// seller
Seller.belongsTo(Product)

// manufacturer
Manufacturer.belongsTo(Product)

module.exports = {
  User,
  Product,
  Review,
  Category,
  Manufacturer,
  Seller
}
