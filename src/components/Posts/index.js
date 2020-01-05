import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../../actions/usersActions'
import * as postsActions from '../../actions/postsActions'

const { getAll: getAllUsers } = usersActions
const { getByUser: getAllPostsByUser } = postsActions

class Posts extends Component {
  async componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      await this.props.getAllUsers()
    }
    this.props.getAllPostsByUser(this.props.match.params.key)
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

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return {
    usersReducer,
    postsReducer
  }
}

const mapDispatchToProps = {
  getAllUsers,
  getAllPostsByUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
