import React from 'react'
import {Segment} from 'semantic-ui-react'

const AccountInfo = ({firstName, lastName, username, email}) => {
  return (
    <Segment.Group>
      <Segment>
        Name: {firstName} {lastName}
      </Segment>
      <Segment>Username: {username}</Segment>
      <Segment>Email: {email}</Segment>
    </Segment.Group>
  )
}

export default AccountInfo
