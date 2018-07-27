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
    getCart(user.id)
  }

  render() {
    const {cart} = this.props
    const subtotal = '$0.00'

    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Header as="h1" dividing textAlign="center" style={styles.header}>
          Shopping Cart
        </Header>
        {cart.length > 1
          ? cart.map(item => (
              <CartItem
                key={item.product.id}
                inventoryReq={item.inventoryReq}
                product={item.product}
              />
            ))
          : ''}

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

export default connect(mapState, mapDispatch)(CartPage)
