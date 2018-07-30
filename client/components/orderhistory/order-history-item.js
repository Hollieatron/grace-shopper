import React from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Header,
  Image,
  Grid,
  Table,
  Dropdown
} from 'semantic-ui-react'
import OrderItem from './order-item'

const OrderHistoryItem = ({orderhistories, status, id}) => {
  const test = {
    productId: 5,
    productName: 'Tony',
    inventorySold: 4,
    productImage: 'https://robohash.org/ergawef',
    productPrice: 54
  }
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column floated="left" width={5}>
          <Header>Order #{id}</Header>
        </Grid.Column>
        <Grid.Column floated="right" width={5}>
          <Header>{status}</Header>
        </Grid.Column>
      </Grid.Row>
      <OrderItem {...test} />
    </Grid>
  )
}

export default OrderHistoryItem
