import React, { useState} from 'react';
import './App.css';
import Swal from "sweetalert2";
import Options from './components/Options.jsx';
import Button from './components/Buttons';
import Caracter from './components/Caracter';
import Password from './components/Contraseña';
import Copy from './components/Copy';
import usePasswordGenerator from './hooks/usePasswordGenerator';



function App() {
  const [length, setLength] = useState("");
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
        <h3>Longitud:</h3>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder='Debe tener de 4 a 32 caracteres'
          id={1}
        />
      </div>
      <div className='checks'>
        <h3>Mayúsculas:</h3>
        <Options checked={includeUppercase} onChange={()=>setIncludeUppercase(!includeUppercase)}/>
      </div>
      <div className='checks'>
        <h3>Minúsculas:</h3>
        <Options checked={includeLowercase} onChange={()=>setIncludeLowercase(!includeLowercase)}/>
      </div>
      <div className='checks'>
        <h3>Números:</h3>
        <Options checked={includeNumbers} onChange={()=>setIncludeNumbers(!includeNumbers)}/>
      </div>
      <div className='checks'>
        <h3>Caracteres Especiales:</h3>
        <Options
          checked={includeSpecialChars}
          onChange={()=>setIncludeSpecialChars(!includeSpecialChars)}/>
      </div>
      <div>
        <h3>Carácter Opcional:</h3>
        <Caracter value={requiredChar} onChange={(e)=>setRequiredChar(e.target.value)} />
      </div>
      <Button text='Generar' onClick={() => (length >= 4 && length <= 32 ? generateNewPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars, requiredChar) : Swal.fire({
        text: "La contraseña debe tener entre 4 y 32 caracteres",
        confirmButtonColor: "#050529",
        }))} />
      {password && (
        <div className='password-generada'>
          <Password value={password} />
          <Copy password={password} />
          <h3>{(password.length === 4) ? "Insegura" :
                  (password.length > 4 && password.length <= 15) ? "Segura" :
                    (password.length > 15) ? "Muy segura" :
                     "Null"}</h3>
        </div>
      )}
    </div>
  );
}

export default App;

