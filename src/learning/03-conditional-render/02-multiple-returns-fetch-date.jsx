import { useEffect, useState } from "react";

const MultipleReturnsFetchData = () => {
  //* Learning
  const someObj = {
    name: "Rahul",
  };
  //* this is ok
  someObj.name; // return "Rahul"
  someObj.age; // return undefined

  const someOtherObj = null;
  //! this is not ok
  // someOtherObj.name;

  const list = [];
  //* this is ok
  list[0]; // return undefined
  //! this is not ok
  // list[0].name;

  const userDetails = {
    id: 123,
    name: "Mohit",
    address: {
      street: "10th street",
      city: "Delhi",
      geo: {
        lat: 39.9009,
        long: 19.9009,
      },
    },
  };

  // const lat =
  //   userDetails.address &&
  //   userDetails.address.geo &&
  //   userDetails.address.geo.lat;

  // Optional Chaining
  const lat = userDetails?.address?.geo?.lat;
  console.log(lat);

  // loading - waiting for data to arrive (display loading screen)
  // error - there was an error (display error screen)
  // success - received data (display data)
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);

  const url = "https://api.github.com/users/QuincyLarson";

  useEffect(() => {
    // async function for fetching data
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setUser(result);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  // if loading is true
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  // if error is true
  if (isError) {
    return (
      <div>
        <h1>There is some error fetching data</h1>
      </div>
    );
  }

  // order matters
  // don't place user JSX before loading or error
  // destructure user state
  const { avatar_url, name, bio } = user;

  // if we successfully fetched the data
  return (
    <div>
      <img src={avatar_url} alt={name} className="w-[200px] rounded-2xl" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
