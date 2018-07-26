import React, {Component} from 'react'
import {fetchReviewsOfProduct} from '../../store/reviews-reducers'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Image, Button, Grid, Header, Segment, Label} from 'semantic-ui-react'
import ReviewCard from './review-card'

const mapState = state => ({
  reviews: state.reviews
})

const mapDispatch = dispatch => {
  return {
    getReviews: id => dispatch(fetchReviewsOfProduct(id))
  }
}

class ReviewPage extends Component {
  componentDidMount() {
    const {getReviews, productId} = this.props
    getReviews(productId)
  }

  render() {
    const {reviews} = this.props

    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Header as="h2">Reviews</Header>
        {reviews.length > 0 ? (
          reviews.map(review => <ReviewCard key={review.id} {...review} />)
        ) : (
          <Segment>
            Sorry, there's currently no reviews for this product.
          </Segment>
        )}
      </div>
    )
  }
}

const styles = {
  div: {
    marginTop: 40
  }
}

export default connect(mapState, mapDispatch)(ReviewPage)
