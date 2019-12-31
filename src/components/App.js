import React from 'react'

export const App = () => {
  const ponerFilas = () => [
    <tr>
      <td>Nikolas</td>
      <td>nikosantis@gmail.com</td>
      <td>nikosantis.com</td>
    </tr>,
    <tr>
      <td>Blog Bacan</td>
      <td>hola@blogbacan.com</td>
      <td>blogbacan.com</td>
    </tr>
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
          { ponerFilas() }
        </tbody>
      </table>
    </div>
  )
}
