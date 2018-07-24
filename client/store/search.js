import axios from 'axios'
import history from '../history'

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
