import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  ProductForm,
  CategoryForm,
  Home,
  UserOrderHistory,
  AccountPage,
  AccountManagement,
  EditAccount,
  OrderManagement
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
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default AdminRoutes