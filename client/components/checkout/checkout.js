import React, {Component} from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import CheckoutForm from './checkout-form'

class Checkout extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <Stripe />
      </StripeProvider>
    )
  }
}

export default Checkout

class Stripe extends Component {
  render() {
    return (
      <Elements>
        <CheckoutForm />
      </Elements>
    )
  }
}
