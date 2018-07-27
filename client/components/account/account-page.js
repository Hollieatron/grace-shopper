import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../../store'
import {
  Menu,
  Button,
  Icon,
  Grid,
  Label,
  Header,
  Segment
} from 'semantic-ui-react'
import AccountInfo from './account-information'

class AccountPage extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const {user} = this.props
    return (
      <div>
        <div
          className="ui raised very padded text container segment"
          style={style.div}
        >
          <Grid divided="vertically">
            <Grid.Row columns={1}>
              <Grid.Column>
                <Header as="h2">Account Information</Header>
                <AccountInfo {...user} />
              </Grid.Column>
              <Header as="h2">Order History</Header>
              {/*orderhistory component*/}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(me())
  }
}

const style = {
  div: {
    marginTop: 40
  },
  button: {
    marginLeft: 5
  }
}

export default connect(mapState, mapDispatch)(AccountPage)
