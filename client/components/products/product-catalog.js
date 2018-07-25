import React, {Component} from 'react'
import ProductGrid from './product-grid'
import {connect} from 'react-redux'
import {fetchProducts} from '../../store'
import {Header, Container, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const mapState = state => ({
  products: state.products,
  category: state.currentCategory,
  user: state.user
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

class ProductCatalog extends Component {
  componentDidMount() {
    const {getProducts} = this.props
    getProducts()
  }

  render() {
    const {products, user} = this.props
    const categoryId = Number(this.props.match.params.categoryId)
    const renderProducts =
      categoryId > 0
        ? products.filter(product => {
            for (let i = 0; i < product.categories.length; i++) {
              if (product.categories[i].id === categoryId) {
                return product
              }
            }
          })
        : products
    console.log(products.length, 'length')
    console.log(renderProducts.length, 'render')
    return (
      <Container style={styles.container}>
        <Header as="h1">
          Products
          {user.isAdmin ? (
            <Button basic color="green" style={styles.button}>
              <Link to="/admin/products/add">Add A Product</Link>
            </Button>
          ) : (
            ''
          )}
        </Header>
        <ProductGrid products={renderProducts} />
      </Container>
    )
  }
}

const styles = {
  container: {
    margin: 30
  },
  button: {
    marginLeft: 20
  }
}

export default connect(mapState, mapDispatch)(ProductCatalog)
