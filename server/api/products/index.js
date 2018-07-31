const router = require('express').Router()
const {Product, Category, Review} = require('../../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {
        inventory: {
          [Op.gt]: 0
        }
      }
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/product/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id, {include: [Category]})
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).send(`Doesn't exist!`)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/search', async (req, res, next) => {
  try{
    const productName = req.query.productName
    const products = await Product.findAll({where: {
      name: productName
    }})
    res.status(200).json(products)
  } catch(err){
    next(err)
  }
})
