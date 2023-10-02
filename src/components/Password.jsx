import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
   
  };

  const copyToClipboard = () => {
    
  };

  return (
    <div>
      <h1>Generador de Contraseñas</h1>
      {/* Agrega campos de entrada y botones aquí */}
      <div>
        <h2>Contraseña Generada</h2>
        <p>{password}</p>
        <button onClick={copyToClipboard}>Copiar al Portapapeles</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;