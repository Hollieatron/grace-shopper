const router = require('express').Router()
const {Product, Category} = require('../../db/models')
module.exports = router

router.post('/products', async (req, res, next) => {
  try {
    const {name, price, description, image, category} = req.body

    let categoryIds = []
    for (let i = 0; i < category.length; i++) {
      if (category[i]) categoryIds.push(i)
    }

    const product = await Product.create({
      name,
      price,
      description,
      image
    })
    product.setCategories(categoryIds)

    const productWithCategories = await Product.findById(product.id, {
      include: [Category]
    })
    res.status(200).send(productWithCategories)
  } catch (err) {
    next(err)
  }
})

router.put('/products/edit/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id)
    const updateProduct = await product.update(req.body)
    res.status(200).send(updateProduct)
  } catch (err) {
    next(err)
  }
})
