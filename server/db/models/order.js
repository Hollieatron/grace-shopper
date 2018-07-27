// const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order',{
    status: {
        type: Sequelize.STRING,
        validate: {
            isIn: ['Created', 'Processing', 'Cancelled', 'Completed']
        }
    }
})

module.exports = Order