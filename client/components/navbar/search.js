import React from 'react'
import {connect} from 'react-redux'
import {setText} from '../../store'
import {Input, Menu} from 'semantic-ui-react'

const mapState = state => ({
  text: state.searchText
})

const mapDispatch = dispatch => ({
  setText: text => dispatch(setText(text))
})

class Search extends React.Component {
  constructor() {
    super()
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSearchSubmit = evt => {
    evt.preventDefault()
    const {searchText} = this.props
  }
  handleChange = evt => {
    const {setText} = this.props
    setText(evt.target.value)
  }

  render() {
    return (
      <Menu.Item onSubmit={this.handleSearchSubmit}>
        <Input
          icon="search"
          placeholder="Search..."
          onChange={this.handleChange}
        />
      </Menu.Item>
    )
  }
}

export default connect(mapState, mapDispatch)(Search)
