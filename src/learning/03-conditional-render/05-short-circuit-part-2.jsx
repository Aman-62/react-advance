import { useState } from "react";

const ShortCircuitPart2 = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("Mohit");
  const [user, setUser] = useState({ name: "Rahul" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-4">Short Circuit</h1>
      {/* part - 1 */}
      <h2 className="text-2xl font-medium">{text || "Default value"}</h2>

      {/* part - 2 */}
      {text && (
        <div>
          <h2 className="text-2xl font-medium">Whatever return</h2>
          <h2 className="text-2xl font-medium">{name}</h2>
        </div>
      )}

      {!text && (
        <div>
          <h2 className="text-2xl font-medium">Whatever return opposite</h2>
          <h2 className="text-2xl font-medium">{name}</h2>
        </div>
      )}

      {/* part - 3 */}
      {user && <ChildComponent name={user.name} />}

      {/* part - 4 */}
      <h2 className="text-2xl font-medium">Ternary Operator</h2>
      {user ? (
        <div>
          <h4 className="text-xl font-medium">Hello there, {user.name}</h4>
          <button
            className={`px-2 py-1 rounded-lg ${
              isEditing ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            {isEditing ? "done" : "edit"}
          </button>
        </div>
      ) : (
        <div>
          <h4 className="text-xl font-medium">Please login</h4>
        </div>
      )}
    </div>
  );
};

const ChildComponent = ({ name }) => {
  return (
    <div>
      <h4 className="text-xl font-medium">Hello there, {name}</h4>
      <button className="px-2 py-1 bg-red-400 rounded-lg">Logout</button>
    </div>
  );
};
export default ShortCircuitPart2;
