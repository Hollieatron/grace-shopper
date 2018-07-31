import React, {Component} from 'react'
import {Header, Divider, Button, Icon, Message} from 'semantic-ui-react'
import {fetchCart} from '../../store'
import {connect} from 'react-redux'
import CartItem from './cart-item'
import {Link} from 'react-router-dom'

const mapState = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  getCart: id => dispatch(fetchCart(id))
})

class CartPage extends Component {
  componentDidMount() {
    const {getCart, user, cart} = this.props

    if (user.id && cart[0].product) {
      getCart(user.id)
    }
  }

  calculateSubtotal(cart) {
    let subtotal = 0

    for (let i = 0; i < cart.length; i++) {
      subtotal += cart[i].inventoryReq * cart[i].product.price
    }

    return `$${subtotal}.00`
  }

  renderCartItems() {
    const {cart} = this.props
    const productId = this.props.cart[0].productId

    if (productId === 0) {
      return <Message>Cart is currently empty.</Message>
    } else
      return cart.map(item => (
        <CartItem
          key={item.product.id}
          inventoryReq={item.inventoryReq}
          product={item.product}
        />
      ))
  }

  render() {
    const {cart} = this.props
    const productId = this.props.cart[0].productId

    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Header as="h1" dividing textAlign="center" style={styles.header}>
          Shopping Cart
        </Header>
        {this.renderCartItems()}
        <Divider />
        <div style={styles.subtotal}>
          <Header sub>Subtotal</Header>
          <span>
            {productId !== 0 ? this.calculateSubtotal(cart) : `$0.00`}
          </span>
        </div>
        <Divider />

        <Button as={Link} to='/cart/checkout' icon labelPosition="right" floated="right">
          Checkout
          <Icon name="right arrow" />
        </Button>
      </div>
    )
  }
}

const styles = {
  div: {
    marginTop: 40,
    width: 575
  },
  header: {
    paddingBottom: 10
  },
  subtotal: {
    textAlign: 'right',
    marginRight: 20
  }
}

export default connect(mapState, mapDispatch)(CartPage)
