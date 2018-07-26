const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  }
})

module.exports = Category
