const router = require('express').Router()
const {Cart} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const id = req.params.id
    const cart = await Cart.findAll({where: {userId: id}})
    res.json(cart)
  } catch (err) {
    next(err)
  }
})
