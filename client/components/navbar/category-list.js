import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'
import {fetchCategories} from '../../store'

class CategoryList extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const {categories} = this.props
    return (
      <Dropdown item icon="th list" simple>
        <Dropdown.Menu>
          {categories.length > 0 ? (
            categories.map(category => {
              return (
                <Dropdown.Item key={category.id}>
                  <Link to={`/catalog/${category.id}/products`}>{category.name}</Link>
                </Dropdown.Item>
              )
            })
          ) : (
            <Dropdown.Item>No Categories</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const mapState = state => ({
  categories: state.categories
})

const mapDispatch = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
})

export default connect(mapState, mapDispatch)(CategoryList)
