import React from 'react'
import {Link} from 'react-router-dom'
import {Image, Grid, Table, Dropdown} from 'semantic-ui-react'

const CartItem = ({id, name, price, imageUrl, inventory, quantity}) => {
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
                    <Dropdown text={quantity}>
                      <Dropdown.Menu>
                        <Dropdown.Item text={inventory} />
                      </Dropdown.Menu>
                    </Dropdown>
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
