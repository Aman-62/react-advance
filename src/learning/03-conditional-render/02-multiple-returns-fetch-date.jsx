import { useEffect, useState } from "react";

const url = "https://api.github.com/users/defunkt";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setUser(result);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>There is some error fetching data</h1>
      </div>
    );
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <a href={user.html_url}>{user.twitter_username}</a>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
