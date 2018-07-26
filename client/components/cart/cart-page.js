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
        <Header as="h1" dividing textAlign="center" style={styles.header}>
          Shopping Cart
        </Header>
        <CartItem
          id={1}
          name="Philippine"
          price="39"
          imageUrl="https://robohash.org/fgykjfth"
          inventory="3"
          quantity="1"
        />
        <CartItem
          id={2}
          name="Lala"
          price="45"
          imageUrl="https://robohash.org/fgykjfth"
          inventory="4"
          quantity="2"
        />
      </div>
    )
  }
}

const styles = {
  header: {
    paddingBottom: 10
  }
}

export default CartPage
