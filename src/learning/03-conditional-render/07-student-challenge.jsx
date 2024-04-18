import { useState } from "react";

const StudentChallenge = () => {
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "Vishal" });
  }
  function logout() {
    setUser(null);
  }

  return (
    <div>
      {user ? (
        <div>
          <h2>Hello, {user?.name}</h2>
          <button className="p-2 bg-slate-300 rounded-md" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
          <button className="p-2 bg-slate-300 rounded-md" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};
export default StudentChallenge;
