import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as tasksActions from '../../actions/tasksActions'

class Save extends Component {
  changeUserId = event => {
    this.props.changeUserId(event.target.value)
  }

  changeTitle = event => {
    this.props.changeTitle(event.target.value)
  }

  render() {
    return (
      <div>
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
        <button>
          Guardar
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(Save)
