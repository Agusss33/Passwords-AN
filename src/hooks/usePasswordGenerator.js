import { useState } from "react";
import Swal from "sweetalert2";

function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecialChars,
  requiredChar
) {
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const caracteres = "!@#$%^&*()_+[]{}|;:,.<>?";

  let validChars = "";
  if (includeLowercase) validChars += minusculas;
  if (includeUppercase) validChars += mayus;
  if (includeNumbers) validChars += numeros;
  if (includeSpecialChars) validChars += caracteres;

  let newPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    newPassword += validChars[randomIndex];
  }

  if (validChars === "") {
    Swal.fire({
      text: "Selecciona al menos una opción (mayúsculas, minúsculas, números o caracteres especiales)",
      confirmButtonColor: "#050529",
    });
    newPassword = "";
    requiredChar = "";
  }

  if (requiredChar !== "") {
    newPassword = requiredChar + newPassword.substring(1);
  }
  return newPassword;
}

function usePasswordGenerator() {
  const [password, setPassword] = useState("");

  const generateNewPassword = (
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialChars,
    requiredChar
  ) => {
    const newPassword = generatePassword(
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSpecialChars,
      requiredChar
    );
    setPassword(newPassword);
  };

  return {
    password,
    generateNewPassword,
  };
}

export default usePasswordGenerator;
