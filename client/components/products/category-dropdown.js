import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../../store'

class CategoryDropdown extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const {categories} = this.props
    return (
      <Fragment>
        {categories.length > 0
          ? categories.map(category => (
              <option key={category.id} value={parseInt(category.id, 10)}>
                {category.name}
              </option>
            ))
          : ''}
      </Fragment>
    )
  }
}

const mapState = state => ({
  categories: state.categories
})

const mapDispatch = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
})

export default connect(mapState, mapDispatch)(CategoryDropdown)
