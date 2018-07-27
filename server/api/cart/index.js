const router = require('express').Router()
const {Cart, CartInventory, Product} = require('../../db/models')

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
