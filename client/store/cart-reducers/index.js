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

const initialState = [{}]

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

    // reformat data
    const cart = data[0].cartinventories
    let userCart = []
    for (let i = 0; i < cart.length; i++) {
      let cartItem = {}
      cartItem.inventoryReq = cart[i].inventoryReq
      cartItem.product = cart[i].products[0]
      userCart.push(cartItem)
    }

    dispatch(getCart(userCart))
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
