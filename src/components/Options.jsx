
function Options({ checked, onChange }) {
    return (
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default Options;