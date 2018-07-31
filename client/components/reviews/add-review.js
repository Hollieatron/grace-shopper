import React from 'react'
import {connect} from 'react-redux'
import {postReviewOfProduct} from '../../store/reviews-reducers'
import {Form, Input, Segment, TextArea, Button} from 'semantic-ui-react'

const mapDispatch = dispatch => ({
  addReview: (id, review) => dispatch(postReviewOfProduct(id, review))
})

class AddReviewCard extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      rating: '',
      description: ''
    }
  }

  handleChange = (e, v) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    const {addReview, productId} = this.props
    const {title, rating, description} = this.state
    const newRating = Number(rating)
    addReview(productId, {title, rating: newRating, description})
    this.setState({
      title: '',
      rating: '',
      description: ''
    })
  }

  render() {
    const {title, rating, description} = this.state
    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group inline>
            <Form.Field
              name="title"
              control={Input}
              label="Title"
              value={title}
              onChange={this.handleChange}
              required
            />
            <label>Rating </label>
            <Form.Field
              control={Input}
              type='radio'
              label="One"
              name="rating"
              value="1"
              checked={rating === '1'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              type='radio'
              label="Two"
              name="rating"
              value="2"
              checked={rating === '2'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              type='radio'
              label="Three"
              name="rating"
              value="3"
              checked={rating === '3'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              type='radio'
              label="Four"
              name="rating"
              value="4"
              checked={rating === '4'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              type='radio'
              label="Five"
              name="rating"
              value="5"
              checked={rating === '5'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Description"
            name="description"
            value={description}
            placeholder="Tell us more about what you thought of this product..."
            onChange={this.handleChange}
            required
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Segment>
    )
  }
}

export default connect(null, mapDispatch)(AddReviewCard)
