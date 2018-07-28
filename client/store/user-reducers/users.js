import axios from 'axios'

const GET_USERS = 'GET_USERS'
const DELETE_USER = 'DELETE_USER'

const defaultUsers = []

const getUsers = users => ({type: GET_USERS, users})
const deleteUser = userId => {
  console.log('in deleteuser')
  return {type: DELETE_USER, userId}
}

export const getUsersFromServer = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/admin/users')
    dispatch(getUsers(data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteUserFromServer = id => async dispatch => {
  try {
    await axios.delete(`/api/admin/users/${id}`)
    dispatch(deleteUser(id))
  } catch (err) {
    console.error(err)
  }
}
export default function(state = defaultUsers, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    case DELETE_USER: {
      const filtered = state.filter(user => user.id !== action.userId)
      return filtered
    }
    default:
      return state
  }
}
