import React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import {Route, Switch} from 'react-router-dom'
import {
  ProductForm,
  CategoryForm,
  Home,
  UserOrderHistory,
  AccountPage,
  AccountManagement,
  EditAccount,
  UserCartPage,
  OrderManagement,
  Checkout
} from '../components'

const AdminRoutes = () => {
  return (
    <Switch>
      {/* Routes only admins have access to*/}
      <Route exact path="/admin/products/add" component={ProductForm} />
      <Route exact path="/admin/category/add" component={CategoryForm} />
      <Route exact path="/admin/account/manage" component={AccountManagement} />
      <Route exact path="/admin/orders/manage" component={OrderManagement} />
      <Route
        exact
        path="/admin/products/edit/:id"
        render={routeProps => <ProductForm id={routeProps.match.params.id} />}
      />
      <Route
        exact
        path="/admin/product/edit/:id"
        render={routeProps => <ProductForm id={routeProps.match.params.id} />}
      />
      <Route
        exact
        path="/admin/category/edit/:id"
        render={routeProps => <CategoryForm id={routeProps.match.params.id} />}
      />
      <Route path="/account/:id/info/edit" component={EditAccount} />
      <Route path="/account/info" component={AccountPage} />
      <Route path="/account/orderhistory" component={UserOrderHistory} />
      <Route
        path="/cart/checkout"
        component={Checkout}
        // render={routeProps => (
        //   <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        //     <Elements>
        //       <Checkout {...routeProps} />
        //     </Elements>
        //   </StripeProvider>
        // )}
      />
      <Route path="/cart" component={UserCartPage} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default AdminRoutes
