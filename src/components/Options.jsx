import { useId } from "react";

function Options({ checked, onChange}) {
  const id = useId();
    return (
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          id={id}
        />
      </div>
    );
  }
  
  export default Options;