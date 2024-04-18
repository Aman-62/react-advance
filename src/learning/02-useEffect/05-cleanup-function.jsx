import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <div>
      <button
        className="px-3 py-2 rounded-xl bg-gray-300"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle button
      </button>

      {toggle && <ChildComponent />}
    </div>
  );
};

const ChildComponent = () => {
  useEffect(() => {
    console.log("Hello, Callback from useEffect");

    const intervalId = setInterval(() => {
      // console.log("Interval of 2 sec");
    }, 2000);

    return () => {
      clearInterval(intervalId);
      console.log("cleanup");
    };
  }, []);

  return <h1 className="text-3xl">Hello World</h1>;
};
export default CleanupFunction;
