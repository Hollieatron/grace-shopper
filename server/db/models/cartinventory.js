const Sequelize = require('sequelize')
const db = require('../db')

const CartInventory = db.define('cartinventory', {
  inventoryReq: {
    type: Sequelize.INTEGER
  }
})

module.exports = CartInventory