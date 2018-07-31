import axios from 'axios'
import history from '../history'

import {getSearchProducts} from './product-reducers/products'

/**
 * ACTION TYPES
 */
const SET_TEXT = 'SET_TEXT'

/**
 * INITIAL STATE
 */
const defaultText = {searchText: ''}

/**
 * ACTION CREATORS
 */
export const setText = text => ({type: SET_TEXT, text})

/**
 * THUNK CREATORS
 */

export const fetchSearchProducts = searchText => async dispatch => {
  console.log(searchText)
  const {data} = await axios.get(`/api/products/search?productName=${searchText}`)
  dispatch(getSearchProducts(data))
  history.push(`/products/search/${searchText}`)
}

/**
 * REDUCER
 */
export default function(state = defaultText, action) {
  switch (action.type) {
    case SET_TEXT:
      return {searchText: action.text}
    default:
      return state
  }
}
