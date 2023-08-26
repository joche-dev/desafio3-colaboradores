import React from 'react'

import { useState } from 'react';

import Alert from './Alert/Alert';

export default function Formulario({addAlert}) {

  const [datosColaborador, setDatosColaborador] = useState({});

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

    console.log(datosColaborador);

  }

  function validandoDatos(e) {

    e.preventDefault();

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const regexTelef = /^[0-9]{9}$/;

    if (datosColaborador.nombreColab === '' || datosColaborador.emailColab === '' || datosColaborador.edadColab === '' || datosColaborador.cargoColab === '' || datosColaborador.telefColab === '') {
      addAlert({
        texto: 'Completar todos los campos',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!regexEmail.test(datosColaborador.emailColab)) {
      addAlert({
        texto: 'Correo electrónico no válido',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!regexTelef.test(datosColaborador.telefColab)) {
      addAlert({
        texto: 'Teléfono debe tener 9 dígitos',
        tipo: 'alert-danger',
        estado: true,
      });
    }
    else {
      addAlert({
        texto: 'Colaborador Agregado',
        tipo: 'alert-success',
        estado: true,
      });
    }

    console.log(addAlert);

  }

  return (
    <div className='formulario col-12 col-lg-4'>
      <h3>Agregar Colaborador</h3>

      <form noValidate onSubmit={(e) => validandoDatos(e)}>

        <div className="mb-3">
          <input onChange={(e) => handlerInputs(e)} type="text" className="form-control" id="inputNombre" placeholder="Nombre del colaborador" />
        </div>

        <div className="mb-3">
          <input onChange={(e) => handlerInputs(e)} type="email" className="form-control" id="inputEmail" placeholder="Email del colaborador" pattern=".*"/>
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

      <Alert alerta={alert}/>

    </div>
  )
}
