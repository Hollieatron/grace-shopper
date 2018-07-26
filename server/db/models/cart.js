const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  guest: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  productIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: []
  }
})

module.exports = Cart
