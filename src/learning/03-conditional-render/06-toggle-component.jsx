import { useState } from "react";

const ToggleComponent = () => {
  const [showAlert, setShowAlert] = useState(false);

  function alertToggle() {
    // if (showAlert) {
    //   setShowAlert(false);
    // } else {
    //   setShowAlert(true);
    // }

    // showAlert ? setShowAlert(false) : setShowAlert(true);

    setShowAlert(!showAlert);
  }

  return (
    <div>
      <button
        className="px-3 py-1 bg-slate-300 rounded-md mb-2"
        onClick={() => setShowAlert(!showAlert)}
      >
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return (
    <div className="bg-orange-200 border-orange-400 px-4 py-2">Hello World</div>
  );
};
export default ToggleComponent;
