import { useState } from "react";

const frameworks = ["react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    // console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    // console.log(e.target.value);
    setFramework(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(shipping, framework);
        }}
      >
        <h3 style={{ userSelect: "none" }}>Other Inputs</h3>

        {/* free shipping */}
        <div>
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>

        <div>
          <label htmlFor="framework">Framework</label>
          <select
            name="framework"
            id="framework"
            onChange={handleFramework}
            value={framework}
          >
            {frameworks.map((el) => (
              <option key={el}>{el}</option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default OtherInputs;
