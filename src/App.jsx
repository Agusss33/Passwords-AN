import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [requiredChar, setRequiredChar] = useState('');
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const caracteres = "!@#$%^&*()_+[]{}|;:,.<>?";

    let validChars = '';
    if (includeLowercase) validChars += minusculas;
    if (includeUppercase) validChars += mayus;
    if (includeNumbers) validChars += numeros;
    if (includeSpecialChars) validChars += caracteres;

    let newPassword= `${requiredChar}`;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars[randomIndex];
    }

    setPassword(newPassword);
  };

  const copy= () => {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Contraseña copiada');
  };

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
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </div>
      <div>
        <label>Minúsculas:</label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
      </div>
      <div>
        <label>Números:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </div>
      <div>
        <label>Caracteres Especiales:</label>
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        />
      </div>
      <div>
        <label>Carácter Opcional:</label>
        <input
          type="text"
          value={requiredChar}
          onChange={(e) => setRequiredChar(e.target.value)}
          maxLength={1}
        />
      </div>
      <button className='btn' onClick={() => (length >= 12 && length <= 30 ? generatePassword() : alert("La contraseña tiene que estar entre 12 hasta 30 caracteres"))}>Generar Contraseña</button>
      {password && (
        <div>
          <h2>Contraseña Generada</h2>
          <p>{password}</p>
          <button className='btn' onClick={copy}>Copiar al Portapapeles</button>
        </div>
      )}
    </div>
  );
}

export default App;

