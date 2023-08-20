import React from 'react';

export default function Listado({ data }) {
  const dataColaboradores = data;
  console.log(dataColaboradores);

  return (
    <div className="listado col-12 col-lg-8">
      <table className="table">
        {/* <thead  className='border-bottom border-secondary'> */}
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody> 
          <tr>
            <td>Leo Grande</td>
            <td>lgrande@gmail.com</td>
            <td>35</td>
            <td>Operador</td>
            <td>999999999</td>
          </tr>
          <tr>
            <td>Leo Grande</td>
            <td>lgrande@gmail.com</td>
            <td>35</td>
            <td>Operador</td>
            <td>999999999</td>
          </tr>
          <tr>
            <td>Leo Grande</td>
            <td>lgrande@gmail.com</td>
            <td>35</td>
            <td>Operador</td>
            <td>999999999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
