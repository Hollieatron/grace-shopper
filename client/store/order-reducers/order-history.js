import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_ORDER_HISTORY = 'GET_ORDER_HISTORY'
const UPDATE_ORDER_STATUS = 'UPDATE_ORDER_STATUS'

/**
 * INITIAL STATE
 */

const initialState = [{id: 0,
status: ''
}]

/**
 * ACTION CREATORS
 */

const getOrderHistory = orderhistory => ({
  type: GET_ORDER_HISTORY,
  orderhistory
})

const editOrderStatus = orderhistory => ({
  type: UPDATE_ORDER_STATUS,
  orderhistory
})

/**
 * THUNK CREATORS
 */

export const fetchOrderHistory = () => {
  return async dispatch => {
    const {data} = await axios.get(`/api/admin/orderhistory/orders`)
    dispatch(getOrderHistory(data))
  }
}

export const updateOrderStatus = (orderId, status) => {
  return async dispatch => {
    const {data} = await axios.put(`/api/admin/orderhistory/order/${orderId}`, {status: status})
    dispatch(getOrderHistory(data))
  }
}


/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER_HISTORY:
      return action.orderhistory
    case UPDATE_ORDER_STATUS:
      return action.orderhistory
    default:
      return state
  }
}
