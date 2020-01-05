import React, { Component } from 'react'

class Posts extends Component {
  render() {
    return (
      <div>
        { this.props.match.params.key }
      </div>
    )
  }
}

export default Posts
