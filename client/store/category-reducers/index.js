import axios from 'axios'
import history from '../../history'

/**
 * ACTION TYPES
 */
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_CATEGORY = 'GET_CATEGORY'
export const ADD_CATEGORY = 'ADD_CATEGORY'

/**
 * INITIAL STATE
 */
const initialState = {
  categories: [{id: 0, name: ''}],
  currentCategory: {id: 0, name: ''}
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

const addCategory = category => ({type: ADD_CATEGORY, category})

/**
 * THUNK CREATORS
 */
export const fetchCategories = () => {
  return async dispatch => {
    const {data} = await axios.get(`/api/categories`)
    dispatch(getCategories(data))
  }
}

export const fetchCategory = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/categories/${id}`)
    dispatch(getCategory(data))
  }
}

export const postCategory = category => {
  return async dispatch => {
    const {data} = await axios.post('/api/admin/categories', category)
    dispatch(addCategory(data))
    history.push(`/`)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.categories
    case GET_CATEGORY:
      return action.category
    case ADD_CATEGORY:
      return action.category
    default:
      return state
  }
}
