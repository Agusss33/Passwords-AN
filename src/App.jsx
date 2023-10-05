import React, { useState } from 'react';
import './App.css';
import Swal from "sweetalert2";
import Options from './components/Options.jsx';
import Button from './components/Buttons';
import Caracter from './components/Caracter';
import Password from './components/Contraseña';
import Copy from './components/Copy';
import usePasswordGenerator from './hooks/usePasswordGenerator';


function App() {
  const [length, setLength] = useState(12);
  const [requiredChar, setRequiredChar] = useState('');
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const { password, generateNewPassword } = usePasswordGenerator();
  
  return (
    <div className="App">
      <h1>Generador de Contraseñas</h1>
      <div>
        <label>Longitud:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min={12}
          max={0}
        />
      </div>
      <div>
        <label>Mayúsculas:</label>
        <Options checked={includeUppercase} onChange={()=>setIncludeUppercase(!includeUppercase)} />
      </div>
      <div>
        <label>Minúsculas:</label>
        <Options checked={includeLowercase} onChange={()=>setIncludeLowercase(!includeLowercase)} />
      </div>
      <div>
        <label>Números:</label>
        <Options checked={includeNumbers} onChange={()=>setIncludeNumbers(!includeNumbers)} />
      </div>
      <div>
        <label>Caracteres Especiales:</label>
        <Options
          checked={includeSpecialChars}
          onChange={()=>setIncludeSpecialChars(!includeSpecialChars)}/>
      </div>
      <div>
        <label>Carácter Opcional:</label>
        <Caracter value={requiredChar} onChange={(e)=>setRequiredChar(e.target.value)} />
      </div>
      <Button text='Generar' onClick={() => (length >= 12 && length <= 30 ? generateNewPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars, requiredChar) : Swal.fire({
        text: "La contraseña debe tener entre 12 y 30 caracteres",
        confirmButtonColor: "#050529",
        }))} />
      {password && (
        <div className='password-generada'>
          <Password value={password} />
          <Copy password={password} />
          <label>{(password.length === 12) ? "Insegura" :
                  (password.length > 12 && password.length <= 15) ? "Segura" :
                    (password.length > 15) ? "Muy segura" :
                     "Null"}</label>
        </div>
      )}
    </div>
  );
}

export default App;

