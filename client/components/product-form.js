import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchProduct, postProduct, putProduct} from '../store/product'

const mapState = state => ({
  product: state.product
})

const mapDispatch = (dispatch, ownProps) => ({
  getProduct: id => dispatch(fetchProduct(id)),
  addProduct: data => dispatch(postProduct(data)),
  editProduct: data => dispatch(putProduct(data, ownProps.history))
})

class ProductForm extends Component {
  componentDidMount() {
    const {id, getProduct} = this.props
    if (id) getProduct(id)
  }

  handleProductFormSubmit = data => {
    const {addProduct, editProduct, id} = this.props
    const {name, price, description, image} = data

    if (id) editProduct({id, name, price, description, image})
    else addProduct({name, price, description, image})
  }

  render() {
    const {pristine, reset, submitting, handleSubmit} = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleProductFormSubmit.bind(this))}>
          <label>Name:</label>
          <Field
            name="name"
            component={renderField}
            type="text"
            placeholder="Name"
          />

          <label>Price:</label>
          <Field
            name="price"
            component={renderField}
            type="number"
            placeholder="Price"
          />

          <label>Description:</label>
          <Field
            name="description"
            component={renderField}
            type="text"
            placeholder="Description"
          />

          <label>Image:</label>
          <Field
            name="image"
            component={renderField}
            type="text"
            placeholder="Image URL"
          />

          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </form>
      </div>
    )
  }
}

// render form fields
const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && (error && <span style={{color: 'red'}}>{error}</span>)}
    </div>
  </div>
)

// validation for form
const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Please enter a name for the product!'
  }
  if (!values.price) {
    errors.price = 'Please enter a price for the product!'
  }
  if (!values.description) {
    errors.description = 'Please enter a description for the product!'
  }
  if (!values.image) {
    errors.image = 'Please enter an image URL for the product!'
  }

  return errors
}

ProductForm = withRouter(connect(mapState, mapDispatch)(ProductForm))

export default reduxForm({
  form: 'product',
  validate
})(ProductForm)
