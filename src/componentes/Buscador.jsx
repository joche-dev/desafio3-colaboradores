import React from 'react';

export default function Buscador() {
  return (
    <div className='buscador col-12 col-md-6'>
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un colaborador"
        className="form-control mb-3"
      />
    </div>
  );
}
