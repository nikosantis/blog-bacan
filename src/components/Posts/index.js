import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../../actions/usersActions'

class Posts extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getAll()
    }
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Publicaciones de</h1>
        { this.props.match.params.key }
      </div>
    )
  }
}

const mapStateToProps = reducers => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Posts)
