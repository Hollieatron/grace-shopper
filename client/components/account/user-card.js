import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Segment, Button, Icon, Checkbox} from 'semantic-ui-react'
import {deleteUserFromServer, updateUserToAdmin, me} from '../../store'

class UserInfoCard extends Component {
  componentDidMount() {
    this.props.getUser()
  }
  handleClick = id => {
    this.props.deleteUser(id)
  }

  handleChange = user => {
    this.props.updateAdmin(user)
  }

  render() {
    const {id, username, firstName, lastName, email, isAdmin} = this.props
    const {user} = this.props
    return (
      <Grid.Column>
        <Segment>
          <Button
            circular
            color="red"
            floated="right"
            size="mini"
            icon="delete"
            onClick={() => this.handleClick(id)}
          />
          Username: {username} <br /> First Name: {firstName} <br /> Last Name:{' '}
          {lastName} <br /> Email: {email} <br /> Admin Status:{' '}
          {isAdmin.toString()}
          <div style={style.checkbox}>
            {isAdmin ? (
              <div>
                {' '}
                {user.id !== id ? (
                  <Checkbox
                    toggle
                    defaultChecked
                    onChange={() => this.handleChange(this.props)}
                  />
                ) : null}
              </div>
            ) : (
              <Checkbox toggle onChange={() => this.handleChange(this.props)} />
            )}
          </div>
        </Segment>
      </Grid.Column>
    )
  }
}

const style = {
  checkbox: {
    float: 'right'
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  deleteUser: id => dispatch(deleteUserFromServer(id)),
  updateAdmin: user => dispatch(updateUserToAdmin(user)),
  getUser: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(UserInfoCard)
