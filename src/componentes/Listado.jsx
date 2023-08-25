import React from 'react';

export default function Listado({ data }) {

  const colaboradores = data.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
    </tr>
  ));

  console.log(colaboradores)

  return (
    <div className="table-responsive col-12 col-lg-8 ">
      <table className="table">
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
          {colaboradores}
        </tbody>
      </table>
    </div>
  );
}
