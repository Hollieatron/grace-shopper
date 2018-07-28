import React, {Component} from 'react'
import {CategoryGrid} from './index'
import {connect} from 'react-redux'
import {Container, Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {fetchCategories, fetchCart} from '../store'

const mapState = state => ({
  user: state.user,
  categories: state.categories,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  getCart: id => dispatch(fetchCart(id))
})

class Home extends Component {
  componentDidMount() {
    const {getCategories, getCart, user} = this.props
    getCategories()
    if (user.id) getCart(user.id)
  }

  render() {
    const {user} = this.props
    return (
      <Container style={styles.container}>
        <Header as="h1">
          Categories
          {user.isAdmin ? (
            <Button
              as={Link}
              to="/admin/category/add"
              basic
              color="green"
              style={styles.button}
            >
              Add A Category
            </Button>
          ) : (
            ''
          )}
        </Header>
        <CategoryGrid />
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

export default connect(mapState, mapDispatch)(Home)
