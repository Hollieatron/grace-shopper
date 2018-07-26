const router = require('express').Router()
const {Review, User} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll()
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})

router.get('/product/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const reviews = await Review.findAll({where: {productId: id}})
    res.status(200).json(reviews)
  } catch (err) {
    next(err)
  }
})
