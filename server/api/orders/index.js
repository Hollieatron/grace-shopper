const router = require('express').Router()
const {Order, OrderHistory, User} = require('../../db/models')

module.exports = router

router.post('/user/:id', async (req, res, next) => {
  try {
    console.log(req.body)
    const {
      userId,
      email,
      zip,
      address,
      state,
      paymentConfirmed,
      amount
    } = req.body
    const {cart} = req.body
    const order = await Order.create({
      status: 'Processing',
      email: email,
      zip: zip,
      state: state,
      address: address,
      paymentConfirmed: paymentConfirmed,
      amount: amount,
      userId: userId
    })
    if (userId) {
      const user = await User.findbyId(userId)
      order.setUser(user)
    }
    const mapped = cart.map(product =>
      OrderHistory.create({
        productId: product[0].id,
        productName: product[0].name,
        productPrice: product[0].price,
        productDesc: product[0].description,
        inventorySold: product[0].inventory
      })
    )
    await Promise.all(mapped)
    res.json(order)
  } catch (err) {
    next(err)
  }
})
