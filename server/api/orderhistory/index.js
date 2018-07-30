const router = require('express').Router()
const {OrderHistory, Order} = require('../../db/models')

module.exports = router
router.get('/', async (req, res, next) => {
  try {
    const orderhistory = await Order.findAll()
    res.json(orderhistory)
  } catch (err) {
    next(err)
  }
})

router.get('/user/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const userorderhistory = await Order.findAll({
      where: {
        userId
      },
      include: [OrderHistory]
    })
    res.json(userorderhistory)
  } catch (err) {
    next(err)
  }
})
