// import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

//function getButtonText() {
//    return 'Click on me!'

//}

// Create react component
const App = () => {
  const buttonText = "Click ME!";
  const labelText = "Enter Name";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};
// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
