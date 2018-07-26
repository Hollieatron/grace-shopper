import axios from 'axios'
import history from '../../history'

/**
 * ACTION TYPES
 */
export const GET_CATEGORY = 'GET_CATEGORY'
export const ADD_CATEGORY = 'ADD_CATEGORY'

/**
 * INITIAL STATE
 */
const initialState = {
  category: {id: 0, name: '', products: []}
}

/**
 * ACTION CREATORS
 */

const getCategory = category => ({
  type: GET_CATEGORY,
  category
})

const addCategory = category => ({type: ADD_CATEGORY, category})

/**
 * THUNK CREATORS
 */

export const fetchCategory = id => {
  return async dispatch => {
    
    const res = await axios.get(`/api/categories/category/${id}`)
    console.log(res)
    dispatch(getCategory(res.data))
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
    case GET_CATEGORY:
      return action.category
    case ADD_CATEGORY:
      return action.category
    default:
      return state
  }
}
