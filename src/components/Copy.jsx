import React from 'react';
import Swal from "sweetalert2";

function Copy({ password }) {
  const copy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    Swal.fire({
      text: "Contraseña copiada al portapapeles",
      timer: 2000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  return (
    <button className='btn' onClick={copy}>
      Copiar al Portapapeles
    </button>
  );
}

export default Copy;
