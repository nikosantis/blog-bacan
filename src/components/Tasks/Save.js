import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loading } from '../General/Loading'
import { Fatal } from '../General/Fatal'
import { Redirect } from 'react-router-dom'

import * as tasksActions from '../../actions/tasksActions'

class Save extends Component {
  changeUserId = event => {
    this.props.changeUserId(event.target.value)
  }

  changeTitle = event => {
    this.props.changeTitle(event.target.value)
  }

  save = () => {
    const { user_id, title, addTask } = this.props
    const new_task = {
      userId: user_id,
      title: title,
      comleted: false
    }
    addTask(new_task)
  }

  disable = () => {
    const {
      user_id,
      title,
      loading
    } = this.props

    if (loading) {
      return true
    }

    if (!user_id || !title) {
      return true
    }

    return false
  }

  showAction = () => {
    const { error, loading } = this.props
    if (loading) {
      return <Loading />
    }

    if (error) {
      return <Fatal message={error} />
    }
  }

  render() {
    return (
      <div>
        {
          (this.props.back)
            ? <Redirect to='/tasks' />
            : ''
        }
        <h1>Guardar Tarea</h1>
        Usuario id:
        <input
          type='number'
          value={ this.props.user_id }
          onChange={ this.changeUserId }
        />
        <br/>
        <br/>
        Título:
        <input
          value={ this.props.title }
          onChange={ this.changeTitle }
        />
        <br/>
        <br/>
        <button
          onClick={ this.save }
          disabled={ this.disable() }
        >
          Guardar
        </button>
        { this.showAction() }
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(Save)
