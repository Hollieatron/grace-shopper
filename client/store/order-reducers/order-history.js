import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_ORDER_HISTORY = 'GET_ORDER_HISTORY'
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

/**
 * THUNK CREATORS
 */

export const fetchOrderHistory = () => {
  return async dispatch => {
    const {data} = await axios.get(`/api/orderhistory/`)
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
    default:
      return state
  }
}
