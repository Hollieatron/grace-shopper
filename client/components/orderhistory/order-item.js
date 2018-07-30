import React from 'react'
import {Link} from 'react-router-dom'
import {Image, Grid, Table} from 'semantic-ui-react'

const OrderItem = props => {
  const {
    inventorySold,
    productId,
    productImage,
    productName,
    productPrice
  } = props
  return (
    // <Grid divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column floated="left">
        <Image src={productImage} size="tiny" />
      </Grid.Column>

      <Grid.Column floated="right">
        <Table basic>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Purchased</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Link to={`/products/product/${productId}`}>{productName}</Link>
              </Table.Cell>
              <Table.Cell>{`$${productPrice}.00`}</Table.Cell>
              <Table.Cell>{`${inventorySold}`}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid.Row>
    // </Grid>
  )
}

export default OrderItem
