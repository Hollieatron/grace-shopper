const router = require('express').Router()
const {Cart, CartInventory, Product} = require('../../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const userid = req.params.id
    const cart = await Cart.findAll(
      {
        where: {
          userid
        }
      },
      {
        include: [
          {
            model: CartInventory,
            include: [Product]
          }
        ]
      }
    )
    res.json(cart)
  } catch (err) {
    next(err)
  }
})