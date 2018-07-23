const Sequelize = require('sequelize')
const db = require('../db')

const Seller = db.define('manufacturer', {
    name: {
        type: Sequelize.STRING
    }
})

module.exports = Seller