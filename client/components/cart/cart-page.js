import React, {Component} from 'react'
import {Header, Divider, Button, Icon, Message} from 'semantic-ui-react'
import {fetchCart} from '../../store'
import {connect} from 'react-redux'
import CartItem from './cart-item'

const mapState = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  getCart: id => dispatch(fetchCart(id))
})

class CartPage extends Component {
  constructor() {
    super()
    // this.state = {
    //   isGuest: true
    // }
  }

  componentDidMount() {
    const {getCart, user} = this.props

    // if user exists, set isGuest to false && get cart
    if (user.id) {
      // this.setState({isGuest: false})
      getCart(user.id)
    }
  }

  // calculate cart subtotal
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

    // if productId is null return cart currently empty
    if (!productId) {
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
          <span>{productId ? this.calculateSubtotal(cart) : `$0.00`}</span>
        </div>
        <Divider />

        <Button icon labelPosition="right" floated="right">
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
