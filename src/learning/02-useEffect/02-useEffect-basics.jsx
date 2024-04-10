import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Hello World!");
  }, []);

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
export default UseEffectBasics;
