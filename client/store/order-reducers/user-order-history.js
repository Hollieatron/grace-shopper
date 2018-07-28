import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_USER_ORDER_HISTORY = 'GET_CART'
/**
 * INITIAL STATE
 */

const initialState = [{}]

/**
 * ACTION CREATORS
 */

const getCart = orderhistory => ({type: GET_USER_ORDER_HISTORY, orderhistory})

/**
 * THUNK CREATORS
 */

export const fetchCart = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/orderhistory/user/${id}`)

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
