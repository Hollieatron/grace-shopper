const router = require('express').Router()
const {Category} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

router.get('/category/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const category = await Category.find({
      where: {id}
    })
    res.status(200).json(category)
  } catch (err) {
    next(err)
  }
})
