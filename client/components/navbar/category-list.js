import React from 'react'
import {connect} from 'react-redux'
import {Dropdown} from 'semantic-ui-react'
import {fetchCategories} from '../../store'

class CategoryList extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const {categories} = this.props
    console.log(categories);
    return (
      <Dropdown item icon="th list" simple>
        <Dropdown.Menu>
          {categories.length > 0 ? categories.map(category => <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>) : <Dropdown.Item>No Categories</Dropdown.Item>}
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
