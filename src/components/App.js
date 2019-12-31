import React from 'react'

export const App = () => {
  const users = [
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
  ]

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
          { users.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.web}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
