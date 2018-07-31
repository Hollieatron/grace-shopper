import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Search from './search'
import CategoryList from './category-list'
import {Menu, Button, Icon, Dropdown} from 'semantic-ui-react'
import {logout} from '../../store'

const Navbar = ({handleClick, isLoggedIn, isAdmin}) => (
  <Menu attached="top">
    <Menu.Item name="home" as={Link} to="/">
      Home
    </Menu.Item>
    <CategoryList />
    <Search />
    <Menu.Menu position="right">
      {isLoggedIn ? (
        <Menu.Item>
          {isAdmin ? (
            <Dropdown button text="Account">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/account/info">
                  Account Info
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/account/orderhistory">
                  Order History
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/account/manage">
                  Manage Accounts
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/orders/manage">
                  Manage Orders
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown button text="Account">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/account/info">
                  Account Info
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/account/orderhistory">
                  Order History
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          <Button onClick={handleClick}>Logout</Button>
        </Menu.Item>
      ) : (
        <Menu.Item>
          <Button as={Link} to="/signup" primary>
            Sign Up
          </Button>
          <Button as={Link} to="/login">
            Login
          </Button>
        </Menu.Item>
      )}
      <Menu.Item>
        <Button animated="vertical" as={Link} to="/cart">
          <Button.Content hidden>My Cart</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
        <Button color="blue">0</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
