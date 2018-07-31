import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Home,
  UserOrderHistory,
  AccountPage,
  EditAccount,
  UserCartPage,
  Checkout
} from '../components'
import {StripeProvider, Elements} from 'react-stripe-elements'

const UserRoutes = () => {
  return (
    <Switch>
      {/* Routes placed here are only available after logging in */}
      <Route path="/account/:id/info/edit" component={EditAccount} />
      <Route path="/account/info" component={AccountPage} />
      <Route path="/account/orderhistory" component={UserOrderHistory} />

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
      <Route path="/cart" component={UserCartPage} />
      <Route path="/home" component={Home} />
    </Switch>
  )
}
export default UserRoutes
