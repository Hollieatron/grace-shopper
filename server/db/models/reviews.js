const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Review
