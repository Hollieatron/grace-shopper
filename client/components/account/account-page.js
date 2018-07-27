import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {me} from '../../store'
import {Button, Icon, Grid, Header} from 'semantic-ui-react'
import AccountInfo from './account-information'

class AccountPage extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const {user} = this.props
    return (
      <div
        className="ui raised very padded text container segment"
        style={style.div}
      >
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as="h2">Account Information</Header>
              <Button
                as={Link}
                to="/account/info/edit"
                style={style.button}
                size="small"
              >
                <Icon name="edit" /> Edit
              </Button>
              <AccountInfo {...user} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
