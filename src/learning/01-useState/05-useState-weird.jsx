import { useState } from "react";

const UseStateWeird = () => {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    /*
    // setNum(num + 1);
    // it is the old value
    // console.log(num);
    //! so if you have any functionality that relies on the latest value it will be wrong!

    setNum((currentState) => {
      // must return otherwise undefined
      // below is the latest/current state value
      const newState = currentState + 1;
      console.log(newState);
      return newState;
    });
    */

    setTimeout(() => {
      console.log("clicked the button");
      setNum((currentState) => currentState + 1);
    }, 3000);
  };

  return (
    <div>
      <h1 className="text-4xl">{num}</h1>
      <button className="bg-slate-400" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};
export default UseStateWeird;
