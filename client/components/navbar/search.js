import React from 'react'
import {connect} from 'react-redux'
import {setText, fetchSearchProducts} from '../../store'
import {Form, Menu} from 'semantic-ui-react'

const mapState = state => ({
  searchText: state.search.searchText
})

const mapDispatch = dispatch => ({
  setText: text => dispatch(setText(text)),
  getSearchProducts: searchText => dispatch(fetchSearchProducts(searchText))
})

class Search extends React.Component {
  constructor() {
    super()
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSearchSubmit() {
    const {searchText, getSearchProducts} = this.props
    console.log(this.props)
    getSearchProducts(searchText)
  }

  handleChange = (evt, {value}) => {
    const {setText} = this.props
    setText(value)
  }

  render() {
    const {searchText} = this.props
    return (
      <Menu.Item>
        <Form onSubmit={this.handleSearchSubmit}>
          <Form.Input
            icon="search"
            value={searchText}
            placeholder="Search..."
            onChange={this.handleChange}
          />
        </Form>
      </Menu.Item>
    )
  }
}

export default connect(mapState, mapDispatch)(Search)
