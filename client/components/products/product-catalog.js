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
    const {getProducts, getCategory} = this.props
    const categoryId = Number(this.props.match.params.categoryId)
    getProducts()
    getCategory(categoryId)
  }

  componentDidUpdate() {
    const categoryId = Number(this.props.match.params.categoryId)
    const {getProducts, getCategory, category} = this.props
    if (categoryId !== category.id) {
      getCategory(categoryId)
    }
    if (categoryId === 0 && category.id != 0) {
      getProducts()
    }
  }

  render() {
    const {products, user, category} = this.props
    let renderProducts = products

    const categoryId = Number(this.props.match.params.categoryId)
    if (category && categoryId !== 0) {
      renderProducts = category.products
    }

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
        <ProductGrid products={renderProducts} category={category} />
        <Divider />
        <Container textAlign="center">
          <Pagination defaultActivePage={1} totalPages={3} />
        </Container>
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
