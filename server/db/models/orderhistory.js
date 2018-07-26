const Sequelize = require('sequelize')
const db = require('../db')

const OrderHistory = db.define('orderhistory', {
  productId: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  productName: {
      type: Sequelize.STRING,
      allowNull: false
  },
  inventorySold: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  productPrice: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  productDesc: {
      type: Sequelize.STRING,
      allowNull: false
  },
  productImage: {
      type: Sequelize.STRING,
      allowNull: false
  }
})

module.exports = OrderHistory