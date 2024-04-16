import { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Rahul");
  return (
    <div>
      {/* The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy". */}
      <h2>Falsy OR : {text || "Hello World"}</h2>
      <h2>Truthy OR : {name || "Hello World"}</h2>

      {/* The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy". */}
      <h2>Falsy AND : {text && "Hello World"}</h2>
      <h2>Truthy AND : {name && "Hello World"}</h2>
    </div>
  );
};
export default ShortCircuit;
