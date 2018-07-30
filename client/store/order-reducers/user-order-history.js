import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_USER_ORDER_HISTORY = 'GET_USER_ORDER_HISTORY'
/**
 * INITIAL STATE
 */

const initialState = [{id: 0,
orderhistories: [],
status: ''
}]

/**
 * ACTION CREATORS
 */

const getUserOrderHistory = orderhistory => ({
  type: GET_USER_ORDER_HISTORY,
  orderhistory
})

/**
 * THUNK CREATORS
 */

export const fetchUserOrderHistory = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/orderhistory/user/${id}`)
    dispatch(getUserOrderHistory(data))
  }
}

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_ORDER_HISTORY:
      return action.orderhistory
    default:
      return state
  }
}
