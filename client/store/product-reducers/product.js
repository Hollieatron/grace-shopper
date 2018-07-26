import axios from 'axios'
import history from '../../history'

/**
 * ACTION TYPES
 */
export const GET_PRODUCT = 'GET_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'

/**
 * INITIAL STATE
 */
const singleProduct = {
  id: 0,
  name: '',
  price: 0.0,
  description: '',
  imageUrl: ''
}

/**
 * ACTION CREATORS
 */
const getProduct = product => ({type: GET_PRODUCT, product})
const addProduct = product => ({type: ADD_PRODUCT, product})
const editProduct = product => ({type: EDIT_PRODUCT, product})

/**
 * THUNK CREATORS
 */
export const fetchProduct = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/products/product/${id}`)
    dispatch(getProduct(data))
  }
}

export const postProduct = product => {
  return async dispatch => {
    const {data} = await axios.post('/api/admin/products', product)
    dispatch(addProduct(data))
    history.push(`/products/product/${data.id}`)
  }
}

export const putProduct = product => {
  return async dispatch => {
    const {data} = await axios.put(
      `/api/admin/product/edit/${product.id}`,
      product
    )
    dispatch(editProduct(data))
    history.push(`/products/product/${data.id}`)
  }
}

/**
 * REDUCER
 */
export default function(state = singleProduct, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    case ADD_PRODUCT:
      return action.product
    case EDIT_PRODUCT:
      return action.product
    default:
      return state
  }
}
