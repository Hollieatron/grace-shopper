import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_CART = 'GET_CART'
const EDIT_CART = 'EDIT_CART'

/**
 * INITIAL STATE
 */

const initialState = [
  {
    id: 0,
    guest: false,
    inventoryReq: 0,
    createdAt: '',
    updatedAt: '',
    userId: 0,
    productId: 0,
    product: {
      id: 0,
      name: '',
      price: 0,
      description: '',
      imageUrl: '',
      inventory: 0,
      createdAt: '',
      updatedAt: '',
      manufacturerId: 0,
      sellerId: 0
    }
  }
]

/**
 * ACTION CREATORS
 */

const getCart = cart => ({type: GET_CART, cart})
const editCart = cart => ({type: EDIT_CART, cart})

/**
 * THUNK CREATORS
 */

export const fetchCart = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/cart/${id}`)
    dispatch(getCart(data))
  }
}

export const postCart = input => {
  return async dispatch => {
    const {userId, productId} = input
    const {data} = await axios.post(`/api/cart/${productId}`, {userId: userId})
    dispatch(getCart(data))
  }
}

export const putCart = input => {
  return async dispatch => {
    const {quantity, productId, userId} = input
    const {data} = await axios.put(`/api/cart/${productId}`, {
      quantity: quantity,
      userId: userId
    })
    dispatch(editCart(data))
  }
}

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case EDIT_CART:
      return action.cart
    default:
      return state
  }
}
