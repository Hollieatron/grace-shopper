const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Category = require('./category')
const Manufacturer = require('./manufacturer')
const Seller = require('./seller')

// user
User.hasMany(Review)

// product
Product.belongsToMany(Category, {through: 'CategoryProduct'})
Product.hasMany(Review)
Product.belongsTo(Manufacturer)
Product.belongsTo(Seller)


// category
Category.belongsToMany(Product, {through: 'CategoryProduct'})

// review
Review.belongsTo(User)
Review.belongsTo(Product)

// seller
Seller.hasMany(Product)

// manufacturer
Manufacturer.hasMany(Product)

module.exports = {
  User,
  Product,
  Review,
  Category,
  Manufacturer,
  Seller
}
