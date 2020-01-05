import React from 'react'
import { connect } from 'react-redux'
import { Loading } from '../General/Loading'
import { Fatal } from '../General/Fatal'

const Comments = props => {
  if (props.loading_com && !props.comments.length) {
    return <Loading />
  }

  if (props.error_com) {
    return <Fatal message={ props.error_com } />
  }

  const putComments = () => (
    props.comments.map(comment => (
      <li key={ comment.id }>
        <b><u>{ comment.email }</u></b>
        <br/>
        { comment.body }
      </li>
    ))
  )

  return (
    <ul>
      { putComments() }
    </ul>
  )
}

const mapStateToProps = ({ postsReducer }) => postsReducer

export default connect(mapStateToProps)(Comments)
