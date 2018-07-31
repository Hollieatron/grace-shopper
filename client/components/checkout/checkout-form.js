import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import {Form, Divider, Button, Icon, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {me} from '../../store'
import axios from 'axios'
import history from '../../history'

const mapState = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(me())
  }
}

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      state: '',
      zip: ''
    }
  }
  componentDidMount() {
    this.props.getUser()
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  submit = async event => {
    event.preventDefault()
    const {cart, user} = this.props
    const userId = user.id
    const firstName = event.target.firstName.value
    const lastName = event.target.lastName.value
    const email = event.target.email.value
    const address = event.target.address.value
    const state = event.target.state.value
    const zip = Number(event.target.zip.value)
    const amount = this.calculateSubtotal(cart)
    let paymentConfirmed = false
    const newOrder = {
      userId,
      firstName,
      lastName,
      email,
      address,
      state,
      zip,
      amount,
      paymentConfirmed
    }
    let {token} = await this.props.stripe.createToken({email: email})

    let response = await axios.post('/api/charge', {
      ...newOrder,
      stripeToken: token.id
    })
    if (response) {
      newOrder.paymentConfirmed = true
      await axios.post(`/api/orders/user/${userId}`, {...newOrder, cart})
      await axios.delete(`/api/cart/${userId}`)
      history.push('/cart/checkout/complete')
    } else {
      newOrder.paymentConfirmed = false
      await axios.post(`/api/orders/user/${userId}`, {...newOrder, cart})
      console.log('no payment')
    }
  }

  calculateSubtotal(cart) {
    let subtotal = 0

    for (let i = 0; i < cart.length; i++) {
      subtotal += cart[i].inventoryReq * cart[i].product.price
    }
    return subtotal
  }

  render() {
    const {cart, user} = this.props
    return (
      <div>
        <br />
        <div className="ui raised very padded text container segment">
          <Form onSubmit={this.submit}>
            <h3>Billing Information</h3>
            <Divider />
            <Form.Group>
              <Form.Input
                label="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder={user.firstName}
                width={6}
              />
              <Form.Input
                label="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder={user.lastName}
                width={6}
              />
              <Form.Input
                label="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder={user.email}
                width={6}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="Address"
                width={11}
              />
              <Form.Input
                label="ZIP"
                name="zip"
                value={this.state.zip}
                onChange={this.handleChange}
                placeholder="ZIP"
                width={3}
              />
              <Form.Input
                label="State"
                name="state"
                value={this.state.state}
                onChange={this.handleChange}
                placeholder="State"
                width={2}
              />
            </Form.Group>
            <br />
            <CardElement
              style={{
                base: {
                  fontSize: '16px',
                  color: '#32325d'
                }
              }}
            />
            <Divider />
            <Header as="h3" textAlign="right">
              Total: ${this.calculateSubtotal(cart)}.00
            </Header>
            <Button basic color="red" animated="vertical" floated="right">
              <Button.Content hidden>
                <Icon name="dollar" />
              </Button.Content>
              <Button.Content visible>Pay</Button.Content>
            </Button>
            <br />
          </Form>
        </div>
      </div>
    )
  }
}

export default injectStripe(
  withRouter(connect(mapState, mapDispatch)(CheckoutForm))
)
