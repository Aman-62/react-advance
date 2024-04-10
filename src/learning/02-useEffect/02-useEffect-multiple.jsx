import { useEffect, useState } from "react";

const UseEffectMultiple = () => {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(100);

  useEffect(() => {
    console.log("Hello From FIRST useEffect!");
  }, [numberOne]);

  useEffect(() => {
    console.log("Hello From SECOND useEffect!");
  }, [numberOne, numberTwo]);

  return (
    <div>
      <p className="text-3xl">Num One: {numberOne}</p>
      <button
        className="px-2 py-1 bg-slate-400 rounded-md"
        onClick={() => {
          setNumberOne(numberOne + 1);
        }}
      >
        increment
      </button>

      <p className="text-3xl">Num Two: {numberTwo}</p>
      <button
        className="px-2 py-1 bg-slate-400 rounded-md"
        onClick={() => {
          setNumberTwo(numberTwo + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};
export default UseEffectMultiple;
