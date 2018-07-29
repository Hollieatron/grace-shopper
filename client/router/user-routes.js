import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Home,
  UserOrderHistory,
  AccountPage,
  EditAccount
} from '../components'

const UserRoutes = () => {
    return (
        <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route path="/account/:id/info/edit" component={EditAccount} />
          <Route path="/account/info" component={AccountPage} />
          <Route path="/account/orderhistory" component={UserOrderHistory} />
          <Route path="/home" component={Home} />
        </Switch>
      )
}
export default UserRoutes