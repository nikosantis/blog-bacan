import axios from 'axios'
import { GET_ALL, LOADING, ERROR, CHANGE_USER_ID, CHANGE_TITLE, ADDED } from '../types/tasksTypes'

export const getAll = () => async dispatch => {
  dispatch({
    type: LOADING
  })
  try {
    const fetchTasks = await axios.get('https://jsonplaceholder.typicode.com/todos')

    const tasks = {}
    fetchTasks.data.map(tsk => (
      tasks[tsk.userId] = {
        ...tasks[tsk.userId],
        [tsk.id]: {
          ...tsk
        }
      }
    ))

    dispatch({
      type: GET_ALL,
      payload: tasks
    })
  } catch (error) {
    console.log('Error:', error.message)
    dispatch({
      type: ERROR,
      payload: 'Información de tareas no disponible'
    })
  }
}

export const changeUserId = user_id => dispatch => {
  dispatch({
    type: CHANGE_USER_ID,
    payload: user_id
  })
}

export const changeTitle = title => dispatch => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title
  })
}

export const addTask = newTask => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const fetchPost = await axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
    console.log(fetchPost.data)
    dispatch({
      type: ADDED
    })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'Intente más tarde'
    })
  }
}

export const edit = edit_task => dispatch => {
  console.log(edit_task)
}
