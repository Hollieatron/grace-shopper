import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Search from './search'
import CategoryList from './category-list'
import {Menu, Button} from 'semantic-ui-react'
import {logout} from '../../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Menu attached="top">
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
          <Button primary>Sign up</Button>
          <Button>Log-in</Button>
        </Menu.Item>
      )}
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
