import React from 'react'
import {Header, Grid} from 'semantic-ui-react'
import OrderItem from './order-item'

const OrderHistoryItem = ({orderhistories, status, id}) => {
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
        {orderhistories.map(orderhistory => (
          <OrderItem {...orderhistory} key={orderhistory.id} />
        ))}
      </Grid>
    </Grid>
  )
}

export default OrderHistoryItem
