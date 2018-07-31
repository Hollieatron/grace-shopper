const router = require('express').Router()
const {Order, OrderHistory, User, Product} = require('../../db/models')

module.exports = router

router.post('/user/:id', async (req, res, next) => {
  try {
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
      status: 'Created',
      email: email,
      zip: zip,
      state: state,
      address: address,
      paymentConfirmed: paymentConfirmed,
      amount: amount,
      userId: userId
    })
    if (userId) {
      const user = await User.findById(userId)
      await order.setUser(user)
    }
    const mappedOrders = cart.map(product =>
      OrderHistory.create({
        productId: product.product.id,
        productName: product.product.name,
        productPrice: product.product.price,
        productDesc: product.product.description,
        inventorySold: product.inventoryReq,
        productImage: product.product.imageUrl
      })
    )
    const mappedProducts = cart.map(product =>
      Product.update(
        {inventory: product.product.inventory - product.inventoryReq},
        {
          where: {
            id: product.product.id
          }
        }
      )
    )

    const orderhistories = await Promise.all(mappedOrders)
    await Promise.all(mappedProducts)
    await order.setOrderhistories(orderhistories)
    res.json(order)
  } catch (err) {
    next(err)
  }
})
