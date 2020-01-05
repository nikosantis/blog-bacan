import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loading } from '../General/Loading'
import { Fatal } from '../General/Fatal'

import * as usersActions from '../../actions/usersActions'

class Users extends Component {

  componentDidMount() {
		this.props.getAll();
  }

  putContent = () => {
    if (this.props.loading) {
      return (
        <Loading/>
      )
    }

    if (this.props.error) {
      return (
        <Fatal message={this.props.error}/>
      )
    }

    return (
      <table className="tabla">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Correo
            </th>
            <th>
              Enlace
            </th>
          </tr>
        </thead>
        <tbody>
          {
            this.renderRows()
          }
        </tbody>
      </table>
    )
  }

  renderRows = () => this.props.users.map((user) => (
		<tr key={ user.id }>
			<td>
				{ user.name }
			</td>
			<td>
				{ user.email }
			</td>
			<td>
				{ user.website }
			</td>
		</tr>
	))

  render() {
    return (
      <div>
        {
          this.putContent()
        }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Users)
