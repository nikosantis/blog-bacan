import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Loading } from '../General/Loading'
import { Fatal } from '../General/Fatal'

import * as tasksActions from '../../actions/tasksActions'

class Tasks extends Component {

  async componentDidMount() {
    if (!Object.keys(this.props.tasks).length) {
      this.props.getAll()
    }
  }

  showContent = () => {
    const { tasks, loading, error } = this.props

    if (loading) {
      return <Loading />
    }

    if (error) {
      return <Fatal message={error} />
    }

    return Object.keys(tasks).map(user_id => (
      <div key={user_id}>
        <h2>Usuario {user_id}</h2>
        <div className='tasks_container'>
          { this.putTasks(user_id) }
        </div>
      </div>
    ))
  }

  putTasks = user_id => {
    const { tasks } = this.props
    const by_user = {
      ...tasks[user_id]
    }

    return Object.keys(by_user).map(tsk_id => (
      <div key={tsk_id}>
        <input type='checkbox' defaultChecked={by_user[tsk_id].completed} />
        {
          by_user[tsk_id].title
        }
      </div>
    ))
  }

  render() {
    return (
      <div>
        <button>
          <Link to='/tasks/save'>Agregar</Link>
        </button>
        { this.showContent() }
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(Tasks)
