import { useId } from "react";

function Caracter({ value, onChange }) {
  const id = useId();

    return (
      <div>
        <input
          type="text"
          maxLength={1}
          value={value}
          onChange={onChange}
          id={id}
        />
      </div>
    );
  }
  
  export default Caracter;