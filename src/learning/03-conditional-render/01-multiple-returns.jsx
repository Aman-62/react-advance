import { useEffect, useState } from "react";

const MultipleReturns = () => {
  //while fetching data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // start fetching
      // fetching...
      // fetching...
      // fetching...
      // fetching...
      // fetching...
      // fetching...
      // fetch complete
      // state update
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Render all fetched data</h1>
    </div>
  );
};
export default MultipleReturns;
