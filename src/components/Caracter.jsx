function Caracter({ value, onChange }) {
    return (
      <div>
        <input
          type="text"
          maxLength={1}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default Caracter;