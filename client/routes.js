import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {StripeProvider, Elements} from 'react-stripe-elements'
import {
  Login,
  Signup,
  ProductCatalog,
  SingleProductPage,
  Home,
  ProductSearch,
  CheckoutComplete,
  CartPage,
  Checkout
} from './components'
import AdminRoutes from './router/admin-routes'
import UserRoutes from './router/user-routes'
import {me} from './store'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isAdmin} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="/products/product/:id" component={SingleProductPage} />
        <Route path="/products/search/:searchText" component={ProductSearch} />
        <Route
          path="/catalog/:categoryId/products"
          component={ProductCatalog}
        />
        <Route path="/cart/checkout/complete" component={CheckoutComplete} />
        <Route
          path="/cart/checkout"
          render={routeProps => (
            <StripeProvider apiKey="pk_test_UniUJcxzZgf0zmgciwrViyLC">
              <Elements>
                <Checkout {...routeProps} />
              </Elements>
            </StripeProvider>
          )}
        />
        {isAdmin && <AdminRoutes />}
        {isLoggedIn && <UserRoutes />}
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
