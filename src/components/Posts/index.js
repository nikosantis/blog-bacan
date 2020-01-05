import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loading } from '../General/Loading'
import { Fatal } from '../General/Fatal'

import * as usersActions from '../../actions/usersActions'
import * as postsActions from '../../actions/postsActions'

const { getAll: getAllUsers } = usersActions
const { getByUser: getAllPostsByUser } = postsActions

class Posts extends Component {
  async componentDidMount() {
    const {
      getAllUsers,
      match: { params: { key } },
      getAllPostsByUser
    } = this.props

    if (!this.props.usersReducer.users.length) {
      await getAllUsers()
    }
    if (this.props.usersReducer.error) {
      return
    }
    if (!('key_posts' in this.props.usersReducer.users[key])) {
      getAllPostsByUser(key)
    }
  }

  putUser = () => {
    const {
      usersReducer,
      match: { params: { key } }
    } = this.props

    if (usersReducer.error) {
      return <Fatal message={usersReducer.error} />
    }

    if (!usersReducer.users.length || usersReducer.loading) {
      return <Loading />
    }

    const name = usersReducer.users[key].name

    return (
      <h1>Publicaciones de { name }</h1>
    )
  }

  putPosts = () => {
    const {
      usersReducer,
      usersReducer: { users },
      postsReducer,
      postsReducer: { posts },
      match: { params: { key } }
    } = this.props

    if (!users.length) { return }

    if (usersReducer.error) { return }

    if (postsReducer.loading) {
      return <Loading />
    }

    if (postsReducer.error) {
      return <Fatal message={postsReducer.error} />
    }

    if (!posts.length) { return }

    if (!('key_posts' in users[key])) { return }

    const { key_posts } = users[key]

    return posts[key_posts].map(post => (
      <div key={post.id} className='post_title'>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
      </div>
    ))
  }

  render() {
    console.log(this.props)
    return (
      <div>
        { this.putUser() }
        { this.putPosts() }
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
