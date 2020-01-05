import axios from 'axios'
import { GET_ALL, LOADING, ERROR } from '../types/postsTypes'

export const getAll = () => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
      type: GET_ALL,
      payload: result.data
    })
  } catch (error) {
    console.log('Error', error.message)
    dispatch({
      type: ERROR,
      payload: 'Algo salió mal, intente más tarde'
    })
  }
}

export const getByUser = key => async (dispatch, getState) => {
  const { users } = getState().usersReducer
  console.log(users)
  const user_id = users[key].id

  const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
  dispatch({
    type: GET_ALL,
    payload: result.data
  })
}
