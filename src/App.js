import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('Hola Pepe');
  const [linea2, setLinea2] = useState('Jamón con pollo');
  const [imagen, setImagen] = useState('fire');

  const onChangeLinea1 = function(e) {
    setLinea1(e.target.value);
  }

  const onChangeLinea2 = function(e) {
    setLinea2(e.target.value);
  }

  const onChangeImagen = function(e){
    setImagen(e.target.value);
  }

  const onClickExportar = function(e){
    // html2canvas(document.body).then(function(canvas) {
    //   document.body.appendChild(canvas);
    // });

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL("image/png");;
      link.click();
    });
  }

  return (
    <div className="App">
      
      {/* //Select picker de memes */}

      <select onChange={onChangeImagen}>
        <option value='fire'>Casa en llamas</option>
        <option value='futurama'>Futurama</option>
        <option value='history'>History Channel</option>
        <option value='matrix'>Matrix</option>
        <option value='philosoraptor'>Philosoraptor</option>
        <option value='smart'>Smart Guy</option>
      </select> <br/>

      <input onChange={onChangeLinea1} type='text' placeholder='Línea 1'/> <br/>
      <input onChange={onChangeLinea2} type='text' placeholder='Línea 2'/> <br/>
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src={'/img/' + imagen + '.jpg'}/>
      </div>


      {/* //Input text - Primer linea
      //Input text - Segunda linea
      //Boton */}
    </div>
  );
}

export default App;
