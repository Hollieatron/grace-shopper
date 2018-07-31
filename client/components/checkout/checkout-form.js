import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import {Form, Divider, Button, Icon, Header, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {fetchCart} from '../../store'

const mapState = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  getCart: id => dispatch(fetchCart(id))
})

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
    const {getCart, user} = this.props
    getCart(user.id)
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  submit = async event => {
    event.preventDefault()
    console.log(event.target)
    const firstName = event.target.firstName.value
    const lastName = event.target.lastName.value
    const email = event.target.email.value
    const address = event.target.address.value
    const state = Number(event.target.state.value)
    const zip = Number(event.target.zip.value)
    const newOrder = {firstName, lastName, email, address, state, zip}

    let {token} = await this.props.stripe.createToken()
    console.log('token', token)
    let response = await axios.post('/api/charge', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: token.id
    })
    console.log(response)
    if (response.ok) console.log('Purchase Complete!')
  }

  calculateSubtotal(cart) {
    let subtotal = 0

    for (let i = 0; i < cart.length; i++) {
      subtotal += cart[i].inventoryReq * cart[i].product.price
    }

    return `$${subtotal}.00`
  }

  render() {
    const {cart} = this.props
    return (
      <div>
        <br />
        <div className="ui raised very padded text container segment">
          <Form error onSubmit={this.submit}>
            <h3>Billing Information</h3>
            <Divider />
            <Form.Group>
              <Form.Input
                label="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First Name"
                width={6}
              />
              <Form.Input
                label="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
                width={6}
              />
              <Form.Input
                label="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
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
              Total: {this.calculateSubtotal(cart)}
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
