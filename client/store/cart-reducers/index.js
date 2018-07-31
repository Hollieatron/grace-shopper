import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_CART = 'GET_CART'
const EDIT_CART = 'EDIT_CART'
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'
const ADD_PRODUCT_TO_GUEST_CART = 'ADD_PRODUCT_TO_GUEST_CART'
const EDIT_PRODUCT_IN_GUEST_CART = 'EDIT_PRODUCT_IN_GUEST_CART'

/**
 * INITIAL STATE
 */

const initialState = [
  {
    guest: true,
    inventoryReq: 0,
    productId: 0,
    product: {
      id: 0,
      name: '',
      price: 0,
      description: '',
      imageUrl: '',
      inventory: 0,
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
const addProductToCart = cart => ({type: ADD_PRODUCT_TO_CART, cart})
const deleteProductFromCart = cart => ({type: DELETE_PRODUCT_FROM_CART, cart})
export const postGuestCart = product => ({
  type: ADD_PRODUCT_TO_GUEST_CART,
  product
})

export const putGuestCart = action => ({
  type: EDIT_PRODUCT_IN_GUEST_CART,
  productId: action.productId,
  inventoryReq: action.inventoryReq
})
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
    dispatch(addProductToCart(data))
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

export const deleteCart = input => {
  return async dispatch => {
    const {userId, productId} = input
    const {data} = await axios.delete(`/api/cart/${productId}/${userId}`)
    dispatch(deleteProductFromCart(data))
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
    case ADD_PRODUCT_TO_CART:
      return action.cart
    case DELETE_PRODUCT_FROM_CART:
      return action.cart
    case ADD_PRODUCT_TO_GUEST_CART:
      if (state[0].inventoryReq === 0)
        return [
          {
            ...state[0],
            guest: true,
            inventoryReq: 1,
            productId: action.product.id,
            product: action.product
          }
        ]
      else {
        return [...state].concat({
          guest: true,
          inventoryReq: 1,
          productId: action.product.id,
          product: action.product
        })
      }
    case EDIT_PRODUCT_IN_GUEST_CART:
      return [...state].map(cart => {
        if (cart.productId === action.productId) {
          cart.inventoryReq = action.inventoryReq
          return cart
        } else {
          return cart
        }
      })
    default:
      return state
  }
}
