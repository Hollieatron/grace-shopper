import axios from 'axios'
import history from '../../history'

/**
 * ACTION TYPES
 */
import {ADD_PRODUCT, EDIT_PRODUCT} from './product'
const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * INITIAL STATE
 */
const initialProducts = [
  {
    id: 0,
    name: '',
    price: 0.0,
    description: '',
    imageUrl: '',
    categories: []
  }
]

/**
 * ACTION CREATORS
 */
const getProducts = products => ({
  type: GET_PRODUCTS,
  products
})

/**
 * THUNK CREATORS
 */

export const fetchProducts = () => async dispatch => {
  const {data} = await axios.get('/api/products')
  dispatch(getProducts(data))
}

/**
 * REDUCER
 */
export default function(state = initialProducts, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product]
    case EDIT_PRODUCT:
      return [...state].map(product => {
        return product.id === action.product.id
          ? {...product, product: action.product}
          : product
      })
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
