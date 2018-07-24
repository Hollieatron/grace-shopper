const router = require('express').Router()
const {Product} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/product/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Product.find({
      where: {id: id}
    })
    res.status(200).json(product)
  } catch (err) {
    next(err)
  }
})

