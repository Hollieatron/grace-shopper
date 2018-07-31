const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Created',
    validate: {
      isIn: [['Created', 'Processing', 'Cancelled', 'Completed']]
    }
  },
  email: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.INTEGER
  },
  address: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  paymentConfirmed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  amount: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order
