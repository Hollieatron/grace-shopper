import React, {Component} from 'react'
import {Header, Divider, Button, Icon} from 'semantic-ui-react'
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
  componentDidMount() {
    const {getCart, user} = this.props
    if (user) getCart(user.id)
  }

  render() {
    const {cart} = this.props // cart is an array of products?
    const subtotal = '$5.00'

    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Header as="h1" dividing textAlign="center" style={styles.header}>
          Shopping Cart
        </Header>
        {/* {cart.map(product => <CartItem key={product.id} {...product} />)} */}
        <CartItem
          id="1"
          name="Apple"
          price="2"
          imageUrl="https://robohash.org/fgykjfth"
          inventory="4"
          quantity="2"
        />

        <Divider />
        <div style={styles.subtotal}>
          <Header sub>Subtotal</Header>
          <span>{subtotal}</span>
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

export default connect(mapState)(CartPage)
