const router = require('express').Router()
const {Review, Product, User} = require('../../db/models')
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

router.post('/product/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const review = req.body.review
    const {title, rating, description} = review
    const productReviewed = await Product.findById(id)
    const newReview = await Review.create({title, rating, description})
    await productReviewed.addReview(newReview)
    const reviews = await Review.findAll({where: {productId: id}})
    res.status(200).json(reviews)
  } catch (err) {
    next(err)
  }
})
