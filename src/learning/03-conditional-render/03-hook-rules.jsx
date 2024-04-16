import { useEffect, useState } from "react";

const HookRules = () => {
  const [stateCondition, setStateCondition] = useState(true);

  if (stateCondition) {
    //! won't work
    const [state, setState] = useState(false);
  }

  if (setStateCondition) {
    return <h2>Hello World</h2>;
  }

  //! this will also fail
  useEffect(() => {
    console.log("Hello World");
  }, []);

  return <div>HookRules</div>;
};
export default HookRules;
