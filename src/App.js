import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [linea1, setLinea1] = useState('Hola Pepe');
  const [linea2, setLinea2] = useState('Jamón con pollo');

  const onChangeLinea1 = function(input) {
    setLinea1(input.target.value);
  }

  const onChangeLinea2 = function(input) {
    setLinea2(input.target.value);
  }

  return (
    <div className="App">
      
      {/* //Select picker de memes */}

      <select>
        <option value='fire'>Casa en llamas</option>
        <option value='futurama'>Futurama</option>
        <option value='firhistorye'>History Channel</option>
        <option value='matrix'>Matrix</option>
        <option value='raptor'>Philosoraptor</option>
        <option value='guy'>Smart Guy</option>
      </select> <br/>

      <input onChange={onChangeLinea1} type='text' placeholder='Línea 1'/> <br/>
      <input onChange={onChangeLinea2} type='text' placeholder='Línea 2'/> <br/>
      <button>Exportar</button>

      <div>
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src=''/>
      </div>


      {/* //Input text - Primer linea
      //Input text - Segunda linea
      //Boton */}
    </div>
  );
}

export default App;
