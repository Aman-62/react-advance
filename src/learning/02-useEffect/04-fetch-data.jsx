import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <section>
      <h1 className="text-5xl text-center mb-10">Github Users</h1>

      {users.map((user) => {
        const { id, avatar_url, login, html_url } = user;

        return (
          <article
            key={id}
            className="max-w-96 flex gap-3 items-center p-2 bg-slate-100 rounded-full mb-4"
          >
            <img src={avatar_url} alt={login} className="w-16 rounded-full" />

            <div>
              <h4 className="font-semibold text-xl">{login}</h4>
              <a href={html_url} className="text-gray-700">
                Profile
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default FetchData;
