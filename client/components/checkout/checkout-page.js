// @ts-ignore
const stripe = require('stripe')('sk_test_y8MlUrZFTqVqortuj3FBHnzq')
const elements = stripe.elements()

var style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
}

const charge = stripe.charges
  .create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com'
  })
  .then(charge => {
    console.log(charge)
  })
