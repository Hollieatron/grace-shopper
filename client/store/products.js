import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
import {ADD_PRODUCT, EDIT_PRODUCT} from './product'

/**
 * INITIAL STATE
 */
const allProducts = [
  {
    id: 0,
    name: '',
    price: 0.0,
    description: '',
    image: ''
  }
]

/**
 * ACTION CREATORS
 */

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function(state = allProducts, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product]
    case EDIT_PRODUCT:
      return [...state].map(product => {
        return product.id === action.product.id
          ? {...product, product: action.product}
          : product
      })
    default:
      return state
  }
}
