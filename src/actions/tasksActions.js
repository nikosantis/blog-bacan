import axios from 'axios'
import { GET_ALL, LOADING, ERROR } from '../types/tasksTypes'

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
