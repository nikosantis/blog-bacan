import axios from 'axios'
import { UPDATED, LOADING, ERROR } from '../types/postsTypes'
import * as usersTypes from '../types/usersTypes'

const { GET_ALL: GET_ALL_USERS } = usersTypes

export const getByUser = key => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  })

  const { users } = getState().usersReducer
  const { posts } = getState().postsReducer
  const user_id = users[key].id

  try {
    const fetchPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

    const news = fetchPosts.data.map(post => ({
      ...post,
      comments: [],
      open: false
    }))

    const uptated_posts = [
      ...posts,
      news
    ]

    dispatch({
      type: UPDATED,
      payload: uptated_posts
    })

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
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'Posts no disponibles'
    })
  }
}

export const openClose = (key_post, key_com) => (dispatch, getState) => {
  const { posts } = getState().postsReducer
  const selected = posts[key_post][key_com]

  const updated = {
    ...selected,
    open: !selected.open
  }

  const updated_posts = [...posts]

  updated_posts[key_post] = [
    ...posts[key_post]
  ]
  updated_posts[key_post][key_com] = updated

  dispatch({
    type: UPDATED,
    payload: updated_posts
  })
}
