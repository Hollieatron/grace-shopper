import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import {Form, Divider, Button, Icon} from 'semantic-ui-react'

class CheckoutForm extends Component {
  async submit(event) {
    let {token} = await this.props.stripe.createToken({name: 'Name'})
    let response = await fetch('/charge', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: token.id
    })

    if (response.ok) console.log('Purchase Complete!')
  }

  render() {
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
                placeholder="First Name"
                width={6}
              />
              <Form.Input
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
                width={6}
              />
              <Form.Input
                label="Email"
                name="email"
                placeholder="Email"
                width={6}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Address"
                name="address"
                placeholder="Address"
                width={11}
              />
              <Form.Input label="ZIP" name="zip" placeholder="ZIP" width={3} />
              <Form.Input
                label="State"
                name="state"
                placeholder="State"
                width={2}
              />
            </Form.Group>
            <CardElement
              style={{
                base: {
                  fontSize: '16px',
                  color: '#32325d'
                }
              }}
            />
            <br />
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

export default injectStripe(CheckoutForm)
