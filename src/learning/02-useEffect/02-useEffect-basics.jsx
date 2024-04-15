import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [number, setNumber] = useState(0);

  // useEffect(callBackFnc(), dependency[]);

  // useEffect(function(){}); <-- this callback function runs on initial render as well re-renders
  // useEffect(function(){}, []); <-- this callback function only runs on initial render
  // useEffect(function(){}, [number]); <-- this callback function only runs on initial render and when number changes

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
