import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const Users = (props) => {
  const [ users, setUsers ] = useState([] )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const renderRows = () => (
    props.users.map(user => (
      <tr key={ user.id }>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
      </tr>
    ))
  )

  return (
    <div>
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
    </div>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, {/*Actions*/})(Users)
