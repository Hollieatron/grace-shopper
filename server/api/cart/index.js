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

router.post('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId
    const userId = req.body.userId

    const inventory = await CartInventory.findOrCreate({
      include: [
        {
          model: Cart,
          where: {
            userId
          },
          include: [
            {
              model: Product,
              where: {
                id: productId
              }
            }
          ]
        }
      ]
    })

    console.log('inventory', inventory)

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
