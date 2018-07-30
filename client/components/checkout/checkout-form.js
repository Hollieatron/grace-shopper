import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'

class CheckoutForm extends Component {
  render() {
    return (
      <form>
        <div>hi</div>
      </form>
    )
  }
}

export default injectStripe(CheckoutForm)

// class Cardthingy extends
