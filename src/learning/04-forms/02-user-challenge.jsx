import { useState } from "react";
import { data } from "../../data";

const UserChallenge = () => {
  const [users, setUsers] = useState([]);
  return <div>UserChallenge</div>;
};
export default UserChallenge;

/*
setup controlled input (name input)

setup onSubmit

import data array from data.js

create another state value (data as default)

iterate over and display right after form (h2)

when user submits the form add new person to the list

add button and setup functionality to remove user
*/
