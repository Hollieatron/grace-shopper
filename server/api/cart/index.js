const router = require('express').Router()
const {Cart, Product} = require('../../db/models')

module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const cart = await Cart.findAll({
      where: {
        userId
      },
      include: [Product]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

// router.post('/:productId', async (req, res, next) => {
//   try {
//     res.sendStatus(200)
//   } catch (err) {
//     next(err)
//   }
// })
