import axios from 'axios'

const GET_USERS = 'GET_USERS'

const defaultUsers = []

const getUsers = users => ({type: GET_USERS, users})

export const getUsersFromServer = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/admin/users')
    dispatch(getUsers(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultUsers, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
