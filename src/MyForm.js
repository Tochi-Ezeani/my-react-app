import { useState } from "react";

function MyForm() {
  // const [name, setName] = useState("");

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`);
    console.log(inputs);
  }
  
  // return (
  //   <form>
  //     <label>Enter your name:
  //       <input type="text" />
  //     </label>
  //   </form>
  // );

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text"
          name="username"
          // value={name}
          value={inputs.username || ""}
          // onChange={(e) => setName(e.target.value)}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default MyForm;