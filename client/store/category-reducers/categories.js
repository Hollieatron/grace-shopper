import axios from 'axios'

/**
 * ACTION TYPES
 */
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
/**
 * INITIAL STATE
 */
const initialState = {
  categories: [{id: 0, name: ''}]
}

/**
 * ACTION CREATORS
 */

const getCategories = categories => ({
  type: GET_ALL_CATEGORIES,
  categories
})


/**
 * THUNK CREATORS
 */
export const fetchCategories = () => {
  return async dispatch => {
    const {data} = await axios.get(`/api/categories`)
    dispatch(getCategories(data))
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
