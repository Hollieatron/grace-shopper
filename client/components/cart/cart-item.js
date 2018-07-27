import React from 'react'
import {Link} from 'react-router-dom'
import {Image, Grid, Table, Dropdown} from 'semantic-ui-react'

const CartItem = ({inventoryReq, product}) => {
  const {id, name, price, imageUrl} = product
  const options = [
    {key: 1, text: '1', value: 1},
    {key: 2, text: '2', value: 2},
    {key: 3, text: '3', value: 3},
    {key: 4, text: '4', value: 4},
    {key: 5, text: '5', value: 5}
  ]

  return (
    <div className="ui very padded text segment">
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={imageUrl} size="tiny" />
          </Grid.Column>

          <Grid.Column>
            <Table basic="very">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Product</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Link to={`/products/product/${id}`}>{name}</Link>
                  </Table.Cell>
                  <Table.Cell>{`$${price}.00`}</Table.Cell>
                  <Table.Cell>
                    <Dropdown text={inventoryReq} options={options} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default CartItem
