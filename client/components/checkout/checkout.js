import React, {Component} from 'react'
import {StripeProvider, Elements, injectStripe} from 'react-stripe-elements'
import CheckoutForm from './checkout-form'

class Checkout extends Component {
  render() {
    return <CheckoutForm />
  }
}

export default Checkout
