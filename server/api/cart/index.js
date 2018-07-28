<<<<<<< HEAD
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
=======
const router = require('express').Router()
const {Cart, CartInventory, Product} = require('../../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const cart = await Cart.findAll({
      where: {
        userId
      },
      include: [
        {
          model: CartInventory,
          include: [Product]
        }
      ]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})
>>>>>>> master
