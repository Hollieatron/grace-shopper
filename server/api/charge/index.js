const router = require('express').Router()
const stripe = require('stripe')('sk_test_y8MlUrZFTqVqortuj3FBHnzq')

router.post('/', (req, res, next) => {
  const stripeToken = req.body.stripeToken

  const amount = (req.body.amount * 100).toFixed(0)

  stripe.charges.create(
    {
      amount: amount,
      currency: 'usd',
      description: 'Hollieatron Industries Order',
      source: stripeToken,
      receipt_email: req.body.email
    },
    (error, charge) => {
      if (error) {
        next(error)
      } else {
        res.status(200).send(charge.id)
      }
    }
  )
})

module.exports = router
