import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {postCategory} from '../../store/category-reducers/'

import {Form, Button, Header, Label} from 'semantic-ui-react'

const mapState = state => ({
  categories: state.categories
})

const mapDispatch = dispatch => ({
  addCategory: data => dispatch(postCategory(data))
})

class CategoryForm extends Component {
  handleCategoryFormSubmit = data => {
    const {addCategory} = this.props
    const {name, imageUrl} = data
    addCategory({name, imageUrl})
  }

  render() {
    const {pristine, reset, submitting, handleSubmit} = this.props
    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Header as="h2">Add Category</Header>
        <Form onSubmit={handleSubmit(this.handleCategoryFormSubmit.bind(this))}>
          <label>Name:</label>
          <Field
            name="name"
            component={renderField}
            type="text"
            placeholder="Name"
          />

          <label>Image:</label>
          <Field
            name="imageUrl"
            component={renderField}
            type="text"
            placeholder="Image"
          />

          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </Button>
        </Form>
      </div>
    )
  }
}

const styles = {
  div: {
    marginTop: 40,
    marginBottom: 40
  }
}

// render form fields
const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && (error && <Label pointing>{error}</Label>)}
    </div>
  </div>
)

// validation for form
const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Please enter a name for the category!'
  }
  if (!values.imageUrl) {
    errors.price = 'Please enter an image for the category!'
  }
  return errors
}

CategoryForm = connect(mapState, mapDispatch)(CategoryForm)

export default reduxForm({
  form: 'category',
  validate
})(CategoryForm)
