const router = require('express').Router()
const {Product} = require('../../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
    try {
      const {name, price, description, image} = req.body
      const product = await Product.create({
        name,
        price,
        description,
        image
      })
      res.status(200).send(product)
    } catch (err) {
      next(err)
    }
  })
  
  router.put('/product/edit/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      const product = await Product.findById(id)
      const updateProduct = await product.update(req.body)
      res.status(200).send(updateProduct)
    } catch (err) {
      next(err)
    }
  })
  