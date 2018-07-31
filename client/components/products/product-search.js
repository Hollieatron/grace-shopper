import React, {Component} from 'react'
import ProductGrid from './product-grid'
import {connect} from 'react-redux'
import {Header, Container, Button, Pagination, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const mapState = state => ({
  products: state.products,
  user: state.user
})

class ProductSearch extends Component {
  render() {
    const {products, user} = this.props
    const searchText = this.props.match.params.searchText
    return (
      <Container style={styles.container}>
        <Header as="h1">
          {searchText}
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
        <ProductGrid products={products}/>
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

export default connect(mapState)(ProductSearch)

