const router = require('express').Router()
const {OrderHistory, Order} = require('../../db/models')
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'graceshoppertest@gmail.com',
    pass: 'test1234!'
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

router.put('/user/:id', async (req, res, next) => {
  try {
    const {orderId, status} = req.body

    const mailOptions = {
      from: 'graceshoppertest@gmail.com',
      to: 'hollieatron.industries@gmail.com', //email goes here
      subject: 'Your Order Status Has Been Updated',
      text: 'Order Number: ' + orderId + ' is now ' + status + '.'
    }
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    res.send(201)
  } catch (err) {
    next(err)
  }
})

module.exports = router
