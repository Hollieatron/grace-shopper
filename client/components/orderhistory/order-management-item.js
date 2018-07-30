import React from 'react'
import {Header, Grid} from 'semantic-ui-react'

const OrderManagementItem = ({status, id}) => {
  return (
    <Grid celled>
      <Grid padded>
        <Grid.Row>
          <Grid.Column floated="left" width={5}>
            <Header>Order #{id}</Header>
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <Header>{status}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid>
  )
}

export default OrderManagementItem