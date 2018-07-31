import React, {Component} from 'react'
import {
  fetchProduct,
  postCart,
  putCart,
  postGuestCart,
  putGuestCart
} from '../../store'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  Image,
  Button,
  Grid,
  Header,
  Segment,
  Label,
  Icon,
  Message
} from 'semantic-ui-react'
import ReviewPage from '../reviews/review-page'

const mapState = state => ({
  product: state.product,
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => {
  return {
    getProduct: id => dispatch(fetchProduct(id)),
    addToCart: input => dispatch(postCart(input)),
    editProductQuantity: data => dispatch(putCart(data)),
    addToGuestCart: product => dispatch(postGuestCart(product)),
    editGuestQuantity: productId => dispatch(putGuestCart(productId))
  }
}

class SingleProductPage extends Component {
  constructor() {
    super()
    this.state = {
      message: '',
      inCart: false,
      inventoryReq: 0
    }
  }

  componentDidMount() {
    const {getProduct, cart} = this.props
    const id = Number(this.props.match.params.id)

    getProduct(id)

    if (cart && !cart.guest) {
      cart.forEach(elem => {
        if (elem.productId === id) {
          this.setState({inCart: true, inventoryReq: elem.inventoryReq})
        }
      })
    }
  }

  addToCartSubmit(productId, userId) {
    const {
      addToCart,
      editProductQuantity,
      product,
      addToGuestCart,
      cart,
      editGuestQuantity
    } = this.props
    let {inCart, inventoryReq} = this.state
    const quantity = inventoryReq + 1

    // if the product inventory and the required inventory are the same
    if (product.inventory === inventoryReq) {
      this.setState({message: 'out-of-stock'})
    }

    // if the product isn't in the cart && it's a guest
    if (!inCart && cart[0].guest) {
      addToGuestCart(product)
      this.setState({inCart: true, message: 'updated', inventoryReq: 1})
    }

    // if product is inCart and the user is a guest
    if (inCart && cart[0].guest) {
      editGuestQuantity({productId, inventoryReq: quantity})
      this.setState({message: 'updated', inventoryReq: quantity})
    }

    // if the product isn't in the cart && user is logged in
    if (!inCart && !cart[0].guest) {
      addToCart({productId, userId: userId})
      this.setState({inCart: true, message: 'updated', inventoryReq: 1})
    }

    // if the product is in the cart && user is logged in
    if (inCart && !cart[0].guest) {
      editProductQuantity({quantity, productId, userId})
      this.setState({message: 'updated', inventoryReq: quantity})
    }
  }

  renderAddToCart() {
    const {product, user} = this.props
    const {inventory, name} = product
    const {message, inventoryReq} = this.state

    // if product is out of stock, render out of stock message
    if (inventory === 0) {
      return (
        <Message negative>
          Sorry, this product is currently out of stock.
        </Message>
      )
      // if product is in stock, render add to cart button
    } else if (
      message === 'out-of-stock' ||
      inventoryReq === product.inventory
    ) {
      return (
        <Message negative>
          You have all {name}s currently available in your cart.
        </Message>
      )
    } else if (inventory > 0 && message !== 'out-of-stock') {
      return (
        <div>
          <Button as="div" labelPosition="right">
            <Button
              color="red"
              onClick={() => this.addToCartSubmit(product.id, user.id)}
            >
              <Icon name="shop" />Add to Cart
            </Button>
            <Label as="a" basic color="red" pointing="left">
              Only {inventory} left!
            </Label>
          </Button>
          {message === 'updated' ? (
            <Message compact positive>
              There are {inventoryReq} {name}s in your cart!
            </Message>
          ) : (
            ''
          )}
        </div>
      )
    }
  }

  render() {
    const {product, user} = this.props
    const id = Number(this.props.match.params.id)

    return (
      <div>
        <div
          className="ui raised very padded text container segment"
          style={styles.div}
        >
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src={product.imageUrl} size="medium" />
              </Grid.Column>
              <Grid.Column>
                <Header as="h2">{product.name}</Header>
                <Label.Group>
                  <Label as="a" size="large" tag>
                    {'$' + product.price}
                  </Label>
                  {user.isAdmin ? (
                    <Button
                      as={Link}
                      to={`/admin/products/edit/${product.id}`}
                      style={styles.button}
                      size="small"
                    >
                      <Icon name="edit" /> Edit
                    </Button>
                  ) : (
                    ''
                  )}
                </Label.Group>
                <Segment>{product.description}</Segment>
                {this.renderAddToCart()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <ReviewPage productId={id} />
      </div>
    )
  }
}

const styles = {
  div: {
    marginTop: 40
  },
  button: {
    marginLeft: 5
  }
}

export default connect(mapState, mapDispatch)(SingleProductPage)
