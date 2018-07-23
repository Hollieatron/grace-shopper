const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Category = require('./category')
const Manufacturer = require('./manufacturer')
const Seller = require('./seller')

// user
User.hasMany(Review)
User.belongsTo(Product);

// product
Product.belongsToMany(Category, {through: 'ProductCategory'})
Product.belongsTo(Review)
Product.hasOne(Manufacturer)
Product.hasOne(Seller)
Product.belongsTo(User);

// category
Category.belongsToMany(Product, {through: 'CategoryProduct'})

// review
Review.hasOne(User)
Review.hasOne(Product)

module.exports = {
  User,
  Product,
  Review,
  Category,
  Manufacturer,
  Seller
}
