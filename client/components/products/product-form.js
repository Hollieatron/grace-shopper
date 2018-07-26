import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {withRouter, BrowserRouter} from 'react-router-dom'
import {fetchProduct, postProduct, putProduct, me} from '../../store'
import CategoryCheckbox from './category-checkbox'
import {Form, Button, Header, Label} from 'semantic-ui-react'

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
    if (id) {
      getProduct(id)
      this.handleInitialize()
    }
  }

  handleInitialize() {
    const {product} = this.props
    const initData = {
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
      inventory: product.inventory
    }

    this.props.initialize(initData)
  }

  handleProductFormSubmit = data => {
    const {addProduct, editProduct, id} = this.props
    const {name, price, description, imageUrl, category, inventory} = data
    if (id)
      editProduct({id, name, price, description, imageUrl, category, inventory})
    else addProduct({name, price, description, imageUrl, category, inventory})
  }

  render() {
    const {pristine, reset, submitting, handleSubmit, product, id} = this.props

    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Header as="h2">{id ? `Edit ${product.name}` : `Add Product`}</Header>

        <Form onSubmit={handleSubmit(this.handleProductFormSubmit.bind(this))}>
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

          <label>Inventory:</label>
          <Field
            name="inventory"
            component={renderField}
            type="number"
            placeholder="Inventory"
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
            name="imageUrl"
            component={renderField}
            type="text"
            placeholder="Image URL"
          />

          <label>Categories:</label>
          <CategoryCheckbox product={product.categories} />

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
  if (!values.category) {
    errors.category = 'Please select a category for the product!'
  }

  return errors
}

ProductForm = withRouter(connect(mapState, mapDispatch)(ProductForm))

export default reduxForm({
  validate,
  form: 'product'
})(ProductForm)
