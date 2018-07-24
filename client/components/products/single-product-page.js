import React, {Component} from 'react'
import {fetchProduct} from '../../store'
import {connect} from 'react-redux'
import {Image, List, Container, Button} from 'semantic-ui-react'

class SingleProductPage extends Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    this.props.fetchProduct(id)
  }

  render() {
    const {product} = this.props

    return (
      <div>
        <Image src={product.imageUrl} size="small" />

        <Container>
          <List>
            <List.Item>{product.name}</List.Item>
            <List.Item>{'$' + product.price}</List.Item>
            <List.Item>{product.description}</List.Item>
          </List>
        </Container>
        <Container textAlign="center">
          <Button basic color="red">
            Add to Cart
          </Button>
        </Container>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.product
})

const mapDispatch = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProductPage)
