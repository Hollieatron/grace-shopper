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
    allowNull: false,
    validate: {
      isLong(value) {
        if(value.length < 200) {
          throw new Error('Must be longer than 200 characters!')
        }
      }
    }
  }
})

module.exports = Review
