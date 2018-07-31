import React, {Component} from 'react'
import {postCart, putCart, postGuestCart, putGuestCart} from '../../store'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, Image, Rating, Button, Icon} from 'semantic-ui-react'
import {fetchReviewsOfProduct} from '../../store'

const mapState = state => ({
  user: state.user,
  cart: state.cart,
  reviews: state.reviews
})

const mapDispatch = dispatch => ({
  addToCart: input => dispatch(postCart(input)),
    editProductQuantity: data => dispatch(putCart(data)),
    addToGuestCart: product => dispatch(postGuestCart(product)),
    editGuestQuantity: productId => dispatch(putGuestCart(productId)),
  getProductReviews: id => dispatch(fetchReviewsOfProduct(id))
})

class ProductCard extends Component {
  constructor() {
    super()
    this.state = {
      inCart: false,
      inventoryReq: 0,
      isGuest: true
    }
  }

  componentDidMount() {
    const {user, cart, product} = this.props
    const {id} = product

    // if user is logged in, set isGuest to false
    if (user.id) {
      this.setState({isGuest: false})
    }

    cart.forEach(elem => {
      if (elem.productId === id) {
        this.setState({inCart: true, inventoryReq: elem.inventoryReq})
      }
    })
  }

  addToCartSubmit(productId, userId) {
    const {
      addToCart,
      editProductQuantity,
      addToGuestCart,
      editGuestQuantity,
      product
    } = this.props

    let {inCart, inventoryReq, isGuest} = this.state
    const quantity = inventoryReq + 1

    // if the product isn't in the cart && it's a guest
    if (!inCart && isGuest) {
      addToGuestCart(product)
      this.setState({inCart: true, inventoryReq: 1})
    }

    // if product is inCart and the user is a guest
    if (inCart && isGuest) {
      editGuestQuantity({productId, inventoryReq: quantity})
      this.setState({inventoryReq: quantity})
    }

    // if the product isn't in the cart && user is logged in
    if (!inCart && !isGuest) {
      addToCart({productId, userId: userId})
      this.setState({inCart: true, inventoryReq: 1})
    }

    // if the product is in the cart && user is logged in
    if (inCart && !isGuest) {
      editProductQuantity({quantity, productId, userId})
      this.setState({inventoryReq: quantity})
    }
  }

  renderAddProductButton() {
    const {product, user} = this.props
    const {inventory} = product
    const {inventoryReq} = this.state

    if (inventory === inventoryReq) {
      return (
        <Button
          icon
          compact
          circular
          negative
          disabled
          floated="right"
          style={styles.button}
        >
          <Icon name="x" />
        </Button>
      )
    } else {
      return (
        <Button
          icon
          compact
          circular
          floated="right"
          style={styles.button}
          onClick={() => this.addToCartSubmit(product.id, user.id)}
        >
          <Icon name="add to cart" />
        </Button>
      )
    }
  }

  render() {
    const {product} = this.props
    const {id, imageUrl, name, price, description} = product
    return (
      <Card>
        <Image src={imageUrl} />
        <Card.Content>
          <Card.Header>
            <Link to={`/products/product/${id}`}>{name}</Link>
            {product ? this.renderAddProductButton() : ''}
          </Card.Header>
          <Card.Meta>Price: ${price}</Card.Meta>
          <Card.Description>{description.slice(0, 40)}.</Card.Description>
          <Rating icon="star" defaultRating={4} maxRating={5} disabled />
        </Card.Content>
      </Card>
    )
  }
}

const styles = {
  button: {
    marginRight: 10
  }
}

export default connect(mapState, mapDispatch)(ProductCard)
