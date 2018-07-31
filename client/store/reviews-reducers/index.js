import axios from 'axios'

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

const addReview = review => ({
  type: ADD_REVIEW,
  review
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

export const postReviewOfProduct = (id, review) => async dispatch => {
  const {data} = await axios.post(`/api/reviews/product/${id}`, {review})
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
