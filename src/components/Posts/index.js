import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../../actions/usersActions'
import * as postsActions from '../../actions/postsActions'

const { getAll: getAllUsers } = usersActions
const { getAll: getAllPosts } = postsActions

class Posts extends Component {
  componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      this.props.getAllUsers()
    }
    if (!this.props.postsReducer.posts.length) {
      this.props.getAllPosts()
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

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return {
    usersReducer,
    postsReducer
  }
}

const mapDispatchToProps = {
  getAllUsers,
  getAllPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
