import { useState } from "react";

function MyForm() {
  const [textArea, setTextArea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextArea(event.target.value);
  }
  
  return (
    <form>
      <textarea value={textArea} onChange={handleChange} />
    </form>
  );
}

export default MyForm;