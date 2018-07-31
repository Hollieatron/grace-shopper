import React, {Component} from 'react'
import {Button, Divider, Header, Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {me} from '../../store'
import {Link} from 'react-router-dom'

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me())
})
class CheckoutComplete extends Component {
  render() {
    return (
      <div className="ui raised very padded text container segment">
        <Header textAlign="center" as="h2">
          Thank you for your purchase!
        </Header>
        <Divider />
        <Header textAlign="center" as="h3">
          A confirmation email has been sent!
        </Header>
        <br />
        <Grid textAlign="center">
          <Grid.Column>
            <Button basic color="blue" as={Link} to="/" size="mini">
              Back to Shopping
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(CheckoutComplete)
