import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  ProductCatalog,
  ProductForm,
  CategoryForm,
  SingleProductPage,
  Home,
  UserOrderHistory,
  AccountPage,
  AccountManagement,
  CartPage,
  EditAccount
} from './components'
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
        <Route path="/cart" component={CartPage} />
        <Route path="/products/product/:id" component={SingleProductPage} />
        <Route
          path="/catalog/:categoryId/products"
          component={ProductCatalog}
        />
        
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/account/:id/info/edit" component={EditAccount} />
            <Route path="/account/info" component={AccountPage} />
            <Route path="/orderhistory" component={UserOrderHistory} />
            <Route path="/home" component={UserHome} />
            
          </Switch>
        )}

        {isLoggedIn &&
          isAdmin && (
            <Switch>
              {/* Routes only admins have access to*/}
              <Route path="/account/info" component={AccountPage} />
              <Route path="/admin/products/add" component={ProductForm} />
              <Route path="/admin/category/add" component={CategoryForm} />
              <Route
                path="/admin/account/manage"
                component={AccountManagement}
              />
              <Route path="/account/:id/info/edit" component={EditAccount} />
              <Route
                exact
                path="/admin/products/edit/:id"
                render={routeProps => (
                  <ProductForm id={routeProps.match.params.id} />
                )}
              />
              <Route
                exact
                path="/admin/product/edit/:id"
                render={routeProps => (
                  <ProductForm id={routeProps.match.params.id} />
                )}
              />
              <Route
                exact
                path="/admin/category/edit/:id"
                render={routeProps => (
                  <CategoryForm id={routeProps.match.params.id} />
                )}
              />
              <Route path="/" component={Home} />
            </Switch>
          )}
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
