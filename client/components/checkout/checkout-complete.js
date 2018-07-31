import React, {Component} from 'react'
import {Form, Divider, Button, Icon, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {me} from '../../store'

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me())
})
class CheckoutComplete extends Component {
  componentDidMount() {
    this.props.getUser()
  }
  render() {
    const {user} = this.props
    return (
      <div className="ui raised very padded text container segment">
        <Header textAlign="center" as="h2">
          Thank you for your purchase!
        </Header>
        <Header textAlign="center" as="h3">
          An email has been sent to {user.email}
        </Header>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(CheckoutComplete)
