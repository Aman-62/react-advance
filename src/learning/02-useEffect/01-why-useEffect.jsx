import { useState } from "react";

const WhyUseEffect = () => {
  const [number, setNumber] = useState(0);

  const greetings = () => {
    console.log("Hello World!");
    // setNumber(number + 1);
  };
  greetings();

  // Q. when re-render trigger?
  // 1. state update 2. props update 3. both props and state update, 4. value,variable update

  // initial render: setup state value and invoke greetings
  // re-render - state value update and invoke greeting
  // re-render - state value update and invoke greeting
  // re-render - state value update and invoke greeting

  return (
    <div>
      <p className="text-3xl">{number}</p>
      <button
        className="px-2 py-1 bg-slate-400 rounded-md"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};
export default WhyUseEffect;
