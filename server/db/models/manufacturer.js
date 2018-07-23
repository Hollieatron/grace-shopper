const Sequelize = require('sequelize')
const db = require('../db')

const Manufacturer = db.define('manufacturer', {
    name: {
        type: Sequelize.STRING
    }
})

module.exports = Manufacturer