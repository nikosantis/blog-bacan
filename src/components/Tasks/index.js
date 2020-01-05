import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../actions/tasksActions'

class Tasks extends Component {

  async componentDidMount() {
    this.props.getAll()
  }

  render() {
    console.log(this.props)
    return (
      <div>Tareas saludar</div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(Tasks)
