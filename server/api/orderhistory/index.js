const router = require('express').Router()
const {OrderHistory} = require('../../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orderhistory = await OrderHistory.findAll()
    res.json(orderhistory)
  } catch (err) {
    next(err)
  }
})
