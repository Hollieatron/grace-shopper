import React from 'react'
import {Header, Grid, Segment} from 'semantic-ui-react'
import OrderItem from './order-item'

const OrderHistoryItem = ({orderhistories, status, id, createdAt, amount}) => {
  const uneditedDate = new Date(createdAt)
  const year = uneditedDate.getFullYear()
  const month = uneditedDate.getMonth()
  const date = uneditedDate.getDate()

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
        <Header as="h3">Ordered on {`${month}/${date}/${year}`}</Header>
        {orderhistories.map(orderhistory => (
          <OrderItem {...orderhistory} key={orderhistory.id} />
        ))}
        <Grid.Row>
          <Grid.Column width="11" />
          <Grid.Column width="5">
            <Segment>
              <Header>Subtotal: ${amount}.00</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid>
  )
}

export default OrderHistoryItem
