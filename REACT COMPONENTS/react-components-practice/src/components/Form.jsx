import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>Hello {name}</p>
    </div>
  );
}

export default Form;