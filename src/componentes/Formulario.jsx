import React from 'react'

export default function Formulario() {
  return (
    <div className='formulario col-12 col-lg-4'>
      <h3>Agregar Colaborador</h3>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" id="inputNombre" placeholder="Nombre del colaborador"/>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="inputEmail" placeholder="Email del colaborador"/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="inputEdad" placeholder="Edad del colaborador"/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="inputCargo" placeholder="Cargo del colaborador"/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="inputTelefono" placeholder="Teléfono del colaborador"/>
        </div>
        <div className="d-grid mb-3">
          <button type="submit" className="btn">Agregar Colaborador</button>
        </div>
      </form>
    </div>
  )
}
