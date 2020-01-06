import axios from 'axios'
import { GET_ALL, LOADING, ERROR, CHANGE_USER_ID, CHANGE_TITLE, SAVE, UPDATE, CLEAN } from '../types/tasksTypes'

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

    dispatch({
      type: SAVE
    })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'Intente más tarde'
    })
  }
}

export const edit = edit_task => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const fetchPost = await axios.put(`https://jsonplaceholder.typicode.com/todos/${edit_task.id}`, edit_task)

    dispatch({
      type: SAVE
    })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'Intente más tarde'
    })
  }
}

export const changeCheck = (usr_id, tsk_id) => (dispatch, getState) => {
  const { tasks } = getState().tasksReducer
  const selected = tasks[usr_id][tsk_id]

  const updateds = {
    ...tasks,
  }
  updateds[usr_id] = {
    ...tasks[usr_id]
  }
  updateds[usr_id][tsk_id] = {
    ...tasks[usr_id][tsk_id],
    completed: !selected.completed
  }

  dispatch({
    type: UPDATE,
    payload: updateds
  })
}

export const remove = tsk_id => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const result = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${tsk_id}`)

    dispatch({
      type: GET_ALL,
      payload: {}
    })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'El servicio no está disponible'
    })
  }
}

export const cleanForm = () => dispatch => {
  dispatch({
    type: CLEAN
  })
}
