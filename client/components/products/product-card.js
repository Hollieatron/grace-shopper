import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, Image, Rating} from 'semantic-ui-react'
import {fetchReviewsOfProduct} from '../../store'

const mapState = state => ({
  reviews: state.reviews
})

const mapDispatch = dispatch => ({
  getProductReviews: id => dispatch(fetchReviewsOfProduct(id))
})

class ProductCard extends React.Component {  
  componentDidMount() {
    const {id, getProductReviews} = this.props
    getProductReviews(id)
  }

  render() {
    const {id, imageUrl, name, price, description, reviews} = this.props
    if(reviews && reviews.length) {

    }
    return (
      <Card>
        <Image src={imageUrl} />
        <Card.Content>
          <Card.Header>
            <Link to={`/products/product/${id}`}>{name}</Link>
          </Card.Header>
          <Card.Meta>Price: ${price}</Card.Meta>
          <Card.Description>{description.slice(0, 40)}.</Card.Description>
          <Rating icon="star" defaultRating={ || 0} maxRating={5} disabled />
        </Card.Content>
      </Card>
    )
  }
}

export default connect(mapState, mapDispatch)(ProductCard)
