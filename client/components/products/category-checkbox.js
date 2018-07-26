import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../../store'
import {Field} from 'redux-form'

class CategoryCheckbox extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const {categories} = this.props
    return (
      <Fragment>
        {categories.length > 0
          ? categories.map(category => (
              <div key={category.id}>
                <Field
                  name={`category.${category.id}`}
                  component="input"
                  type="checkbox"
                />
                <label>{category.name}</label>
              </div>
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

export default connect(mapState, mapDispatch)(CategoryCheckbox)
