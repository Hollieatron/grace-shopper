import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Image, Grid, Table, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {putCart, deleteCart, putGuestCart, deleteGuestCart} from '../../store'

const mapState = state => ({
  cart: state.cart,
  user: state.user
})

const mapDispatch = dispatch => ({
  editProductQuantity: data => dispatch(putCart(data)),
  deleteProductFromCart: data => dispatch(deleteCart(data)),
  editGuestQuantity: productId => dispatch(putGuestCart(productId)),
  deleteFromGuestCart: action => dispatch(deleteGuestCart(action))
})

class CartItem extends Component {
  constructor() {
    super()
    this.state = {
      productId: 0,
      quantity: 0,
      userId: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleQuantitySubmit = this.handleQuantitySubmit.bind(this)
  }

  componentDidMount() {
    const {inventoryReq, product, user} = this.props
    const userId = user.id
    const productId = product.id

    this.setState({
      quantity: inventoryReq,
      productId: productId,
      userId: userId
    })
  }

  handleQuantitySubmit(event) {
    event.preventDefault()
    const {editProductQuantity, cart, editGuestQuantity} = this.props
    const {quantity, productId, userId} = this.state

    if (!cart[0].guest) {
      editProductQuantity({quantity, productId, userId})
    }
    if (cart[0].guest) {
      editGuestQuantity({productId, inventoryReq: quantity})
    }
  }

  handleChange(event) {
    this.setState({
      quantity: event.target.value
    })
  }

  handleDeleteSubmit() {
    const {deleteProductFromCart, cart, deleteFromGuestCart} = this.props
    const {userId, productId} = this.state
    if (!cart[0].guest) {
      deleteProductFromCart({productId, userId})
    }
    if (cart[0].guest) {
      deleteFromGuestCart(productId)
    }
  }

  render() {
    const {product} = this.props
    const {id, name, price, imageUrl} = product
    return (
      <div className="ui very padded text segment">
        <Grid divided="vertically" style={styles.tableCell}>
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
                    <Table.Cell style={{marginRight: 20}}>
                      <form onSubmit={this.handleQuantitySubmit}>
                        <input
                          type="number"
                          name="quantity"
                          onChange={this.handleChange}
                          style={styles.input}
                          min="1"
                          max={product.inventory}
                          value={this.state.quantity}
                        />
                        <input type="submit" value="Update" />
                      </form>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button
          negative
          onClick={() => this.handleDeleteSubmit()}
          size="mini"
          floated="right"
          style={styles.button}
        >
          Remove
        </Button>
      </div>
    )
  }
}

const styles = {
  tableCell: {
    paddingRight: 40
  },
  input: {
    width: 60
  },
  button: {
    marginBottom: 10
  }
}

export default connect(mapState, mapDispatch)(CartItem)
