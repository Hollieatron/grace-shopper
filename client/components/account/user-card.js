import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Segment, Button, Icon} from 'semantic-ui-react'
import {deleteUserFromServer, getUsersFromServer} from '../../store'

class UserInfoCard extends Component {
  handleClick = id => {
    this.props.deleteUser(id)
  }
  render() {
    const {id, username, firstName, lastName, email, isAdmin} = this.props
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
          <Button
            as={Link}
            to={`/account/${id}/info/edit`}
            floated="right"
            size="mini"
          >
            <Icon name="edit" /> Edit
          </Button>
        </Segment>
      </Grid.Column>
    )
  }
}

const mapDispatch = dispatch => ({
  deleteUser: id => dispatch(deleteUserFromServer(id))
})

export default connect(null, mapDispatch)(UserInfoCard)
