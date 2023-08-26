import React from 'react'

import { useState } from 'react';

export default function Formulario(alerta) {

  const [datosColaborador, setDatosColaborador] = useState({
    nombreColab: "",
    emailColab: "",
    edadColab: "",
    cargoColab: "",
    telefColab: ""
  });

  function handlerInputs(e) {
    if (e.target.id === "inputNombre") {
      setDatosColaborador({ ...datosColaborador, nombreColab: e.target.value });
    }

    if (e.target.id === "inputEmail") {
      setDatosColaborador({ ...datosColaborador, emailColab: e.target.value });
    }

    if (e.target.id === "inputEdad") {
      setDatosColaborador({ ...datosColaborador, edadColab: e.target.value });
    }
    if (e.target.id === "inputCargo") {
      setDatosColaborador({ ...datosColaborador, cargoColab: e.target.value });
    }
    if (e.target.id === "inputTelefono") {
      setDatosColaborador({ ...datosColaborador, telefColab: e.target.value });
    }

    //console.log(datosColaborador);

  }

  function validandoDatos(e) {

    e.preventDefault();

    if (datosColaborador.nombreColab === '' || datosColaborador.emailColab === '' || datosColaborador.edadColab === '' || datosColaborador.cargoColab === '' || datosColaborador.telefColab === '') {
      alerta({
        texto: 'Completar todos los campos',
        tipo: 'alert-danger',
        estado: true,
      });

    } else {
      alerta({
        texto: 'Colaborador Agregado',
        tipo: 'alert-success',
        estado: true,
      });
    }

    console.log(alerta);
  }


  return (
    <div className='formulario col-12 col-lg-4'>
      <h3>Agregar Colaborador</h3>

      <form onSubmit={(e) => validandoDatos(e)} >

        <div className="mb-3">
          <input onChange={(e) => handlerInputs(e)} type="text" className="form-control" id="inputNombre" placeholder="Nombre del colaborador" />
        </div>

        <div className="mb-3">
          <input onChange={(e) => handlerInputs(e)} type="email" className="form-control" id="inputEmail" placeholder="Email del colaborador" />
        </div>

        <div className="mb-3">
          <input onChange={(e) => handlerInputs(e)} type="text" className="form-control" id="inputEdad" placeholder="Edad del colaborador" />
        </div>

        <div className="mb-3">
          <input onChange={(e) => handlerInputs(e)} type="text" className="form-control" id="inputCargo" placeholder="Cargo del colaborador" />
        </div>

        <div className="mb-3">
          <input onChange={(e) => handlerInputs(e)} type="text" className="form-control" id="inputTelefono" placeholder="Teléfono del colaborador" />
        </div>

        <div className="d-grid mb-3">
          <button type="submit" class="btn">Agregar Colaborador</button>
        </div>

      </form>

    </div>
  )
}
