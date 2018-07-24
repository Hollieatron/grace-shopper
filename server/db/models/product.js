const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.TEXT
  }
})

module.exports = Product
