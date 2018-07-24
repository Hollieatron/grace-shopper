const Sequelize = require('sequelize')
const db = require('../db')

const Seller = db.define('seller', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Seller

