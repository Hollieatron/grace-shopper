import axios from 'axios'
import history from '../../history'

/**
 * ACTION TYPES
 */
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_CATEGORY = 'GET_CATEGORY'

/**
 * INITIAL STATE
 */
const initialState = {
  categories: [],
  currentCategory: {}
}

/**
 * ACTION CREATORS
 */

const getCategories = categories => ({
  type: GET_ALL_CATEGORIES,
  categories
})

const getCategory = category => ({
  type: GET_CATEGORY,
  category
})

/**
 * THUNK CREATORS
 */
export const fetchCategories = () => {
  return async dispatch => {
    const {data} = await axios.get(`/api/categories/${id}`)
    dispatch(getCategory(data))
  }
}

export const fetchCategory = id => {
  return async dispatch => {
    const {data} = await axios.get('/api/categories')
    dispatch(getCategory(data))
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.product
    case GET_CATEGORY:
      return action.product
    default:
      return state
  }
}
