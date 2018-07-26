import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
  postCategory,
  putCategory,
  fetchCategory
} from '../../store/category-reducers/'

import {Form, Button, Header, Label} from 'semantic-ui-react'

const mapState = state => ({
  category: state.category
})

const mapDispatch = (dispatch, ownProps) => ({
  getCategory: id => dispatch(fetchCategory(id)),
  addCategory: data => dispatch(postCategory(data)),
  editCategory: data => dispatch(putCategory(data, ownProps.history))
})

class CategoryForm extends Component {
  componentDidMount() {
    const {getCategory} = this.props
    const id = Number(this.props.match.params.id)

    if (id) {
      getCategory(id)
      // this.handleInitialize()
    }
  }

  // handleInitialize() {
  //   const {category} = this.props
  //   const initData = {
  //     name: category.name,
  //     imageUrl: category.imageUrl
  //   }

  //   this.props.initialize(initData)
  // }

  handleCategoryFormSubmit = data => {
    const {id, addCategory, editCategory} = this.props
    const {name, imageUrl} = data
    if (id) {
      editCategory({id, name, imageUrl})
    } else addCategory({name, imageUrl})
  }

  render() {
    const {pristine, reset, submitting, handleSubmit, id, category} = this.props
    console.log(category)
    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Header as="h2">{id ? `Edit` : `Add Category`}</Header>
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

CategoryForm = withRouter(connect(mapState, mapDispatch)(CategoryForm))

export default reduxForm({
  form: 'category',
  validate
})(CategoryForm)
