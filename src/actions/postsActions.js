import axios from 'axios'
import { GET_BY_USER, LOADING, ERROR } from '../types/postsTypes'
import * as usersTypes from '../types/usersTypes'

const { GET_ALL: GET_ALL_USERS } = usersTypes

export const getByUser = key => async (dispatch, getState) => {
  const { users } = getState().usersReducer
  const { posts } = getState().postsReducer
  const user_id = users[key].id

  const fetchPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

  const uptated_posts = [
    ...posts,
    fetchPosts.data
  ]

  const key_posts = uptated_posts.length - 1
  const updated_users = [...users]
  updated_users[key] = {
    ...users[key],
    key_posts
  }

  dispatch({
    type: GET_ALL_USERS,
    payload: updated_users
  })

  dispatch({
    type: GET_BY_USER,
    payload: uptated_posts
  })
}
