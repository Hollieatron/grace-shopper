import React, {Component} from 'react'
import ProductGrid from './product-grid'
import {connect} from 'react-redux'
import {fetchProducts, fetchCategory} from '../../store'
import {Header, Container, Button, Pagination, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const mapState = state => ({
  products: state.products,
  category: state.category,
  user: state.user
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  getCategory: id => dispatch(fetchCategory(id))
})

class ProductCatalog extends Component {
  componentDidMount() {
    const {getProducts} = this.props
    const categoryId = Number(this.props.match.params.categoryId)
    getProducts()
    getCategory(categoryId)
  }

  render() {
    const {products, user, category} = this.props

    const renderProducts =
      categoryId > 0
        ? category.products
        : products
    if (renderProducts.length > 0) {
      return (
        <Container style={styles.container}>
          <Header as="h1">
            Products
            {user.isAdmin ? (
              <Button
                as={Link}
                to="/admin/products/add"
                basic
                color="green"
                style={styles.button}
              >
                Add A Product
              </Button>
            ) : (
              ''
            )}
          </Header>
          <ProductGrid products={renderProducts} />
          <Divider />
          <Container textAlign="center">
            <Pagination defaultActivePage={1} totalPages={3} />
          </Container>
        </Container>
      )
    } else {
      return (
        <Container style={styles.container}>
          <Header as="h1">
            Products
            {user.isAdmin ? (
              <Button
                as={Link}
                to="/admin/products/add"
                basic
                color="green"
                style={styles.button}
              >
                Add A Product
              </Button>
            ) : (
              ''
            )}
          </Header>
          <Divider />
          <Container textAlign="center">
            <Pagination defaultActivePage={1} totalPages={3} />
          </Container>
        </Container>
      )
    }
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
