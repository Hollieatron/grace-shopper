const router = require('express').Router()
const {Cart, Product} = require('../../db/models')
const Sequelize = require('sequelize')

module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const cart = await Cart.findAll({
      where: {
        userId
      }
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})
