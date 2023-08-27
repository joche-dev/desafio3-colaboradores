import React from 'react'
import './alert.css'

export default function Alert({alerta}) {

  const { texto, tipo, estado } = alerta;

  return (
    <>
    <div className={`alert col-12 col-lg-4 ${estado ? tipo : 'display-none'} mt-1`}>
      {texto}
    </div>
    </>
  )
}
