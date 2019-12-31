import React, { useState, useEffect } from 'react'

export const App = () => {
  const [ users, setUsers ] = useState([] )

  useEffect(() =>
    setUsers([
      {
        name: 'Nikolas',
        email: 'nikosantis@gmail.com',
        web: 'nikosantis.com'
      },
      {
        name: 'Blog Bacan',
        email: 'hola@blogbacan.com',
        web: 'blogbacan.com'
      }
    ]),
    []
  )
  const putRow = () => (
    users.map(user => (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.web}</td>
      </tr>
    ))
  )

  return (
    <div className="margen">
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
            putRow()
          }
        </tbody>
      </table>
    </div>
  )
}
