import axios from 'axios'

const GET_USERS = 'GET_USERS'
const DELETE_USER = 'DELETE_USER'
const UPDATE_USER_TO_ADMIN = 'UPDATE_USER_TO_ADMIN'

const defaultUsers = []

const getUsers = users => ({type: GET_USERS, users})
const deleteUser = userId => ({type: DELETE_USER, userId})
const userToAdmin = updated => ({type: UPDATE_USER_TO_ADMIN, updated})

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

export const updateUserToAdmin = user => async dispatch => {
  try {
    await axios.put(`/api/admin/users/${user.id}`, user)
    const {data} = await axios.get(`/api/admin/users/${user.id}`)
    dispatch(userToAdmin(data))
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
    case UPDATE_USER_TO_ADMIN: {
      const filtered = state.map(user => {
        if (user.id === action.updated.id) return action.updated
        return user
      })
      return filtered
    }
    default:
      return state
  }
}
