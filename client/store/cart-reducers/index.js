import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_CART = 'GET_CART'
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'

/**
 * INITIAL STATE
 */

const initialState = {
  id: 0
}

/**
 * ACTION CREATORS
 */

const getCart = cart => ({type: GET_CART, cart})

/**
 * THUNK CREATORS
 */

export const fetchCart = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/cart/${id}`)
    dispatch(getCart(data))
  }
}

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    default:
      return state
  }
}
