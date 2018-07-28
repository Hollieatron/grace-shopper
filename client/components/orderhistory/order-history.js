import React, {Component} from 'react'
import {Header, Divider, Button, Icon} from 'semantic-ui-react'
import {fetchUserOrderHistory} from '../../store'
import {connect} from 'react-redux'
import CartItem from './cart-item'

const mapState = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  getOrderHistory: id => dispatch(fetchUserOrderHistory(id))
})

class OrderHistory extends Component {
  componentDidMount() {
    const {getOrderHistory, user} = this.props
    getOrderHistory(user.id)
  }

  render() {
    const {cart} = this.props

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
          <span>{cart.length > 1 ? this.calculateSubtotal(cart) : ''}</span>
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

export default connect(mapState, mapDispatch)(OrderHistory)
