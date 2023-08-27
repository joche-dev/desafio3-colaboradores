import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import BaseColaboradores from './BaseColaboradores';
import Buscador from './componentes/Buscador';
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import Alert from './componentes/Alert/Alert';
import { useState } from 'react';

function App() {

  /** 
  const [searchTerm, setSearchTerm] = useState('');
  */

  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);

  /**
  const filteredColaboradores = baseColaboradores.filter(colaborador =>
    colaborador.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  */

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
      <Buscador/>
      <div className="row row-cols-2 m-0">
        <div className='div-listado'>
          <Listado data={baseColaboradores} />
        </div>
          <div className='div-form-alert'>
            <Formulario className="formulario" addAlert={addAlert} setData={setBaseColaboradores} data={baseColaboradores}/>
            <Alert className="alert" alerta={alert}/>
          </div>
      </div>
    </>
  );
}

export default App;
