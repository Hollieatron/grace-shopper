const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  guest: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  inventoryReq: {
    type: Sequelize.INTEGER
  }
})

module.exports = Cart