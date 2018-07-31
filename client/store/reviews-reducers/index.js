import axios from 'axios'
import history from '../../history'

/**
 * ACTION TYPES
 */
const GET_REVIEWS = 'GET_REVIEWS'

/**
 * INITIAL STATE
 */
const initialReviews = [
  {
    id: 0,
    title: '',
    rating: 0,
    userId: 0,
    productId: 0
  }
]

/**
 * ACTION CREATORS
 */
const getReviews = reviews => ({
  type: GET_REVIEWS,
  reviews
})

/**
 * THUNK CREATORS
 */

export const fetchReviews = () => async dispatch => {
  const {data} = await axios.get('/api/reviews')
  dispatch(getReviews(data))
}

export const fetchReviewsOfProduct = id => async dispatch => {
  const {data} = await axios.get(`/api/reviews/product/${id}`)
  dispatch(getReviews(data))
}

/**
 * REDUCER
 */
export default function(state = initialReviews, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews
    default:
      return state
  }
}
