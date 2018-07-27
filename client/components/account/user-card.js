import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Segment, Button, Icon} from 'semantic-ui-react'

const UserInfoCard = ({username, firstName, lastName, email, isAdmin}) => {
  return (
    <Grid.Column>
      <Segment>
        <Button color="red" floated="right" size="mini">
          <Icon name="delete" />
        </Button>
        Username: {username} <br /> First Name: {firstName} <br /> Last Name:{' '}
        {lastName} <br /> Email: {email} <br /> Admin Status:{' '}
        {isAdmin.toString()}
        <Button as={Link} to="/admin/account/edit" floated="right" size="mini">
          <Icon name="edit" /> Edit
        </Button>
      </Segment>
    </Grid.Column>
  )
}

const style = {
  button: {
    marginRight: 5
  }
}

export default UserInfoCard
