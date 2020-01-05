import React from 'react'
import { connect } from 'react-redux'

const Table = (props) => {
  const renderRows = () => props.users.map((user) => (
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

  return (
    <>
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
            renderRows()
          }
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = reducers => {
  return reducers.usersReducer
}

export default connect(mapStateToProps)(Table)
