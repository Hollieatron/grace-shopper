import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Search from './search'
import CategoryList from './category-list'
import {Menu, Button, Icon} from 'semantic-ui-react'
import {logout} from '../../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Menu attached="top">
    <Menu.Item name="home" as={Link} to="/">
      Home
    </Menu.Item>
    <CategoryList />
    <Search />
    <Menu.Menu position="right">
      {isLoggedIn ? (
        <Menu.Item
          name="logout"
          active={activeItem === 'logout'}
          onClick={handleClick}
        />
      ) : (
        <Menu.Item>
          <Button as={Link} to="/signup" primary>
            Sign up
          </Button>
          <Button as={Link} to="/login">
            Log In
          </Button>
        </Menu.Item>
      )}
      <Menu.Item>
        <Button animated="vertical">
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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
