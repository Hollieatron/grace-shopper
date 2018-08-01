const router = require('express').Router()
const stripe = require('stripe')('sk_test_y8MlUrZFTqVqortuj3FBHnzq')
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'graceshoppertest@gmail.com',
    pass: 'test1234!'
  }
})

router.post('/', (req, res, next) => {
  const stripeToken = req.body.stripeToken
  const email = req.body.email
  const amount = (req.body.amount * 100).toFixed(0)

  stripe.charges.create(
    {
      amount: amount,
      currency: 'usd',
      description: 'Hollieatron Industries Order',
      source: stripeToken,
      receipt_email: 'hollieatron.industries@gmail.com' //email goes here
    },
    (error, charge) => {
      if (error) {
        next(error)
      } else {
        const mailOptions = {
          from: 'graceshoppertest@gmail.com',
          to: 'hollieatron.industries@gmail.com', //email goes here
          subject: 'Thank you for your purchase!',
          text: '$' + req.body.amount + ' paid!'
        }
        transporter.sendMail(mailOptions, function(err, info) {
          if (err) {
            console.log(err)
          } else {
            console.log('Email sent: ' + info.response)
          }
        })
        res.status(200).send(charge.id)
      }
    }
  )
})



module.exports = router
