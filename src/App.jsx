import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import BaseColaboradores from './BaseColaboradores';
import Buscador from './componentes/Buscador';
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import Alert from './componentes/Alert/Alert';
import { useState } from 'react';

function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);

  const [alert, setAlert] = useState({
    texto: '',
    tipo: '',
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert (newAlert)
  }

  return (
    <>
      <h1 className="my-4">Lista de Colaboradores</h1>
      <Buscador />
      <div className="row row-cols-2 m-0">
        <Listado data={baseColaboradores} />
          <Formulario addAlert={addAlert}/>
          <Alert alerta={alert}/>
      </div>
    </>
  );
}

export default App;
