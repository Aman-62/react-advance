import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleChange(e) {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setName(e.target.value);
    // console.log("Input changed");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name: " + name);
    console.log("Email: " + email);
  }
  function handleClick(e) {
    // e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Inputs</h2>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <button
        type="reset"
        onClick={() => {
          setEmail("");
          setName("");
        }}
      >
        Reset
      </button>

      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
