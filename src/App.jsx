import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BaseColaboradores} from './BaseColaboradores';
import Buscador from './componentes/Buscador';
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import Alert from './componentes/Alert';
import { useState } from 'react';

function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);

  return (
    <>
      <h1 className="my-4">Lista de Colaboradores</h1>
      <Buscador />
      <div className="row row-cols-2 m-0">
        <Listado data={baseColaboradores} />
        <Formulario />
        <Alert />
      </div>
    </>
  );
}

export default App;
