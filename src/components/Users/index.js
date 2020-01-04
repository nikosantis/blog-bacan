import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Users = () => {
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
            users.map(user => (
            <tr key={ user.id }>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
              <td>{ user.website }</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}
