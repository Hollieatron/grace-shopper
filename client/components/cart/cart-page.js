import React, {Component} from 'react'
import {Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import CartItem from './cart-item'

// const mapState = state => ({
//   cart: cart.state
// })

class CartPage extends Component {
  render() {
    return (
      <div className="ui piled very padded container segment">
        <Header as="h2">Shopping Cart</Header>
        <CartItem />
      </div>
    )
  }
}

const styles = {}

export default CartPage
