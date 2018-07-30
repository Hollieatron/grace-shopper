import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Image, Grid, Table} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {putCart} from '../../store'

const mapState = state => ({
  cart: state.cart,
  user: state.user
})

const mapDispatch = dispatch => ({
  editProductQuantity: data => dispatch(putCart(data))
})

class CartItem extends Component {
  constructor() {
    super()
    this.state = {
      productId: 0,
      quantity: 1,
      userId: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit = event => {
    event.preventDefault()
    const {editProductQuantity} = this.props
    const {quantity, productId, userId} = this.state
    editProductQuantity({quantity, productId, userId})
  }

  handleChange(event) {
    this.setState({
      quantity: event.target.value
    })
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
                      <form onSubmit={this.handleSubmit}>
                        <input
                          type="number"
                          name="quantity"
                          onChange={this.handleChange}
                          style={styles.input}
                          min="1"
                          value={this.state.quantity}
                        />
                        <input type="submit" value="Submit" />
                      </form>
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
}

const styles = {
  tableCell: {
    paddingRight: 40
  },
  input: {
    width: 60
  }
}

export default connect(mapState, mapDispatch)(CartItem)
