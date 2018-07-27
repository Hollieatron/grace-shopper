import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsersFromServer} from '../../store'
import UserInfoCard from './user-card'
import {Grid, Header} from 'semantic-ui-react'

class AccountManagement extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const {users} = this.props
    return (
      <div
        className="ui raised very padded text container segment"
        style={style.div}
      >
        <Header as="h2" textAlign="center">
          All Users
        </Header>
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            {users.map(user => <UserInfoCard key={user.id} {...user} />)}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapState = state => ({
  users: state.users
})

const mapDispatch = dispatch => {
  return {
    getUsers: () => dispatch(getUsersFromServer())
  }
}

const style = {
  div: {
    marginTop: 40
  }
}
export default connect(mapState, mapDispatch)(AccountManagement)
