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

router.post('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId
    const {userId} = req.body
    await Cart.findOrCreate({
      where: {
        userId,
        productId
      }
    })
    const newCart = await Cart.findAll({
      where: {
        userId
      },
      include: [Product]
    })
    res.status(200).send(newCart)
  } catch (err) {
    next(err)
  }
})

router.put('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId
    const {userId, quantity} = req.body
    await Cart.update({inventoryReq: quantity}, {where: {productId, userId}})
    const cart = await Cart.findAll({
      where: {
        userId
      },
      include: [Product]
    })
    res.status(200).send(cart)
  } catch (err) {
    next(err)
  }
})

router.delete('/:productId/:userId', async (req, res, next) => {
  try {
    const {productId, userId} = req.params
    await Cart.destroy({where: {productId, userId}})
    const cart = await Cart.findAll({
      where: {
        userId
      },
      include: [Product]
    })
    res.status(200).send(cart)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const cart = await Cart.destroy({where: {userId: userId}})
    
    res.json(cart)
  } catch (err) {
    next(err)
  }
})
